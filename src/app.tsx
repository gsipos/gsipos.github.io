import * as React from "react";
import * as ReactDOM from "react-dom";

import { profile } from "./data/data.source";
import styled, { injectGlobal } from "styled-components";

declare module "*.jpg";
import profilePic from "../assets/profile-pic.jpg";

const color = {
  textPrimary: "#fcfcfc",
  backgroundPrimary: "#351231",
  accent: "#f24333"
};

const fontFamily = "Montserrat, Consolas, Arial, Helvetica, sans-serif";

injectGlobal`
    body {
        color: ${color.textPrimary};
        width: 100vw;
        height: 100vh;
        margin: 0;
        overflow: hidden;
        overflow-y: auto;
        background-color: ${color.backgroundPrimary};
        font-family: ${fontFamily};
    }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const RowWrap = styled(Row)`
  flex-wrap: wrap;
`;

const SectionRoot = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  border-radius: 0px;
  padding: 8px;
`;

const SectionHeader = styled.h1`
  border-bottom: 4px solid ${color.accent};
  line-height: 1em;
  font-weight: 100;
`;

const SectionSubHeader = styled.h3`
  margin: 0;
`;

const SectionAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 4px solid transparent;
  transform: all 0.3s linear;

  &:hover {
    border-bottom-color: ${color.accent};
    transform: all 0.3s linear;
  }
`;

const ProfilePic = styled.img`
  width: 200px;
  height: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-bottom: 4px solid ${color.accent};
`;

const MyName = styled(SectionHeader)`
  font-size: 48px;
  padding: 4px 0px 4px 0px;
  width: 100%;
  margin-bottom: 0;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-top: 4px;
`;

const ContactImg = styled.img`
  height: 32px;
  width: 32px;
  margin-left: 8px;
  margin-right: 8px;
  filter: grayscale();
`;

const IntroRoot = styled(SectionRoot)`
  grid-area: introduction;
`;

const Introduction = () => (
  <IntroRoot>
    <ProfilePic src={profilePic} />
    <MyName>{profile.name}</MyName>
    <ContactContainer>
      <SectionSubHeader>Web Developer</SectionSubHeader>
      <Row>
        {profile.contacts.map(contact => (
          <SectionAnchor href={contact.url} target="_blank">
            <ContactImg
              src={contact.logo}
              alt={contact.name}
            />
          </SectionAnchor>
        ))}
      </Row>
    </ContactContainer>
  </IntroRoot>
);

const BlogRoot = styled(SectionRoot)`
  grid-area: blogs;
`;

const ArticleLink = styled.div`
  padding-bottom: 24px;
`;

const ArticleAnchor = styled(SectionAnchor)`
  font-size: 28px;
  color: inherit;
`;

const Blogs = () => (
  <BlogRoot>
    <SectionHeader>Posts</SectionHeader>
    {profile.blogs.map(post => (
      <ArticleLink>
        <ArticleAnchor href={post.link} target="_blank">
          {post.title}
        </ArticleAnchor>
        <div>{post.published}</div>
      </ArticleLink>
    ))}
  </BlogRoot>
);

const TalkRoot = styled(SectionRoot)`
  grid-area: talks;
`;

const TalkVideo = styled.div`
  padding: 16px;
`;

const Talks = () => (
  <TalkRoot>
    <SectionHeader>Talks</SectionHeader>
    {profile.talks.map(talk => (
      <TalkVideo>
        <SectionSubHeader>{talk.title}</SectionSubHeader>
        {
          // frameborder="0" allowfullscreen
        }
        {talk.link && <iframe width="560" height="315" src={talk.link} />}
        <div>
          {talk.date} @ {talk.event}
        </div>
        {talk.slides && (
          <SectionAnchor href={talk.slides} target="_blank">
            Slides
          </SectionAnchor>
        )}
      </TalkVideo>
    ))}
  </TalkRoot>
);

const Tech = styled.div`
  flex: 1 0 150px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 4px;
  padding-bottom: 16px;
`;

const TechLogo = styled.img`
  max-height: 52px;
  margin-right: 16px;
  filter: grayscale();
`;

const TechRoot = styled(SectionRoot)`
  grid-area: techs;
`;

const Techs = () => (
  <TechRoot>
    <SectionHeader>Technologies</SectionHeader>
    <RowWrap>
      {profile.tech.map(tech => (
        <Tech>
          <TechLogo src={tech.logo} />
          <div className="tech-name">{tech.name}</div>
        </Tech>
      ))}
    </RowWrap>
  </TechRoot>
);

const ProjectRoot = styled(SectionRoot)`
  grid-area: projects;
`;

const RepoContainer = styled.div`
  padding-bottom: 24px;
  width: 100%;
`;

interface Repo {
  id: number;
  name: string;
  fork: boolean;
  description: string;
  html_url: string;
  size: number;
}

const filterOutForks = (repos: Repo[]) => repos.filter(r => !r.fork);

export class HobbyProjects extends React.Component<{}, { repos: Repo[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { repos: [] };
    fetch("https://api.github.com/users/gsipos/repos")
      .then(res => res.json())
      .then(filterOutForks)
      .then(repos => this.setState({ repos }));
  }

  render() {
    const myRepos = this.state.repos.sort((a, b) => a.size - b.size);
    return (
      <ProjectRoot>
        <SectionHeader>Hobby Projects</SectionHeader>
        {myRepos.map(repo => (
          <RepoContainer key={repo.id}>
            <ArticleAnchor href={repo.html_url} target="_blank">
              {repo.name}
            </ArticleAnchor>
            <div>{repo.description}</div>
          </RepoContainer>
        ))}
      </ProjectRoot>
    );
  }
}

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  background: inherit;

  display: flex;
  flex-flow: row wrap;

  align-items: stretch;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr auto;
  grid-template-areas:
    "introduction blogs    talks"
    "introduction projects talks"
    "introduction techs    techs";
  grid-gap: 16px;
  padding: 16px;

  @media (max-width: 1450px) {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "introduction talks"
      "blogs        talks"
      "projects     talks"
      "techs        techs";
  }

  @media (max-width: 1070px) {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto auto;
    grid-template-areas:
      "introduction introduction"
      "blogs        projects"
      "talks        talks"
      "techs        techs";
  }

  @media (max-width: 780px) {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: auto;
    grid-template-areas:
      "introduction"
      "blogs"
      "projects"
      "talks"
      "techs";
  }
`;

const App = () => (
  <Content>
    <Introduction />
    <Blogs />
    <Talks />
    <HobbyProjects />
    <Techs />
  </Content>
);

ReactDOM.render(<App />, document.getElementById("app"));
