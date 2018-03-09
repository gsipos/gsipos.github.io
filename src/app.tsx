import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { profile } from "./data/data.source"
import { HobbyProjects } from './hobby-projects'

const Introduction = () => (
    <div className="glass introduction inverse-hover">
        <img className="profile-pic" src="assets/profile-pic.jpg"></img>
        <h1 className="my-name">{profile.name}</h1>
        <div className="contact-container">
            <h3>Web Developer</h3>
            <div className="contacts">
                {profile.contacts.map(contact => (
                    <a href={contact.url} target="_blank">
                        <img src={profile.techLogoRoot + contact.logo} alt={contact.name} />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const Blogs = () => (
    <div className="glass blogs">
        <h1>Posts</h1>
        {profile.blogs.map(post => (
            <div className="article-link">
                <a href={post.link} target="_blank">{post.title}</a>
                <div>{post.published}</div>
            </div>
        ))}
    </div>
)

const Talks = () => (
    <div className="glass talks">
        <h1>Talks</h1>
        {profile.talks.map(talk => (
            <div className="talk-video">
                <h3>{talk.title}</h3>
                {// frameborder="0" allowfullscreen
                }
                {talk.link && <iframe width="560" height="315" src={talk.link} />}
                <div>{talk.date} @ {talk.event}</div>
                {talk.slides && <a href={talk.slides} target="_blank">Slides</a>}
            </div>
        ))}
    </div>
)


const Techs = () => (
    <div className="glass techs">
        <h1>Technologies</h1>
        <div className="tech-container">
            {profile.tech.map(tech => (
                <div className="tech">
                    <img className="tech-logo" src={profile.techLogoRoot + tech.logo} />
                    <div className="tech-name">{tech.name}</div>
                </div>
            ))}
        </div>
    </div>
);

const App = () => (
    <div className="content">
            <Introduction />
            <Blogs />
            <Talks />
            <HobbyProjects />
            <Techs />
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'))