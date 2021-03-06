import * as React from "react";
import * as ReactDOM from "react-dom";

import { profile } from "./data/data.source";
import styled, { createGlobalStyle } from "styled-components";

declare module "*.jpg";
declare module "*.svg";
import profilePic from "../assets/profile-pic.jpg";
import bg from "../assets/bg1.svg";

const color = {
  textPrimary: "#fcfcfc",
  backgroundPrimary: "#351231",
  accent: "#f24333"
};

const fontFamily = "Montserrat, Consolas, Arial, Helvetica, sans-serif";

const GlobalStyle = createGlobalStyle`
    body {
        color: ${color.textPrimary};
        width: 100vw;
        height: 100vh;
        margin: 0;
        overflow: hidden;
        overflow-y: auto;
        background-color: ${color.backgroundPrimary};
        background-image: url(${bg});
        background-size: cover;
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
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
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
  width: 240px;
  height: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-bottom: 4px solid ${color.accent};
`;

const MyName = styled(SectionHeader)`
  font-size: 64px;
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
          <SectionAnchor href={contact.url} target="_blank" rel="noopener">
            <ContactImg src={contact.logo} alt={contact.name} />
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
  flex: 0 1 150px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 4px;
  padding-bottom: 16px;
`;

const TechRoot = styled(SectionRoot)`
  grid-area: techs;
`;

const Techs = () => (
  <TechRoot>
    <SectionHeader>Technologies</SectionHeader>
    <RowWrap>
      {profile.tech.map(tech => (
        <Tech>{tech.name}</Tech>
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

  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-rows: 100vh auto auto auto auto;
  grid-template-columns: auto;
  grid-template-areas:
    "introduction"
    "blogs"
    "projects"
    "talks"
    "techs";
  grid-gap: 200px;
  padding: 16px;
`;

const App = () => (
  <Content>
    <GlobalStyle />
    <Introduction />
    <Blogs />
    <Talks />
    <HobbyProjects />
    <Techs />
  </Content>
);

ReactDOM.render(<App />, document.getElementById("app"));
