import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { profile } from "./data/data.source"
import { TechVisualization } from './tech-visualization/tech'
import { HobbyProjects } from './hobby-projects'

//import "./sample-d3/nFxyD.ts";

const MainIntroduction = () => (
    <div className="strip dominant">
        <div className="left fadeIn">
            <img className="profile-pic fadeIn" src="assets/profile-pic.jpg"></img>
        </div>
        <div className="right fadeIn anim-delay-1">
            <div>Hello! I'm</div>
            <h1 className="my-name">{profile.name}</h1>
            <h3>Web Developer</h3>
        </div>
    </div>
)

const Introduction = () => (
    <div className="glass introduction">
        <img className="profile-pic" src="assets/profile-pic.jpg"></img>
        <div>Hello! I'm</div>
        <h1 className="my-name">{profile.name}</h1>
        <h3>Web Developer</h3>
    </div>
);

const Blogs = () => (
    <div className="strip">
        <div className="left">
            <h1>My posts</h1>
        </div>
        <div className="right">
            {profile.blogs.map(post => (
                <div className="article-link">
                    <div>{post.published}</div>
                    <a href={post.link} target="_blank">{post.title}</a>
                </div>
            ))}
        </div>
    </div>
)

const Blogs2 = () => (
    <div className="glass blogs">
        <h1>My posts</h1>
        {profile.blogs.map(post => (
            <div className="article-link">
                <div>{post.published}</div>
                <a href={post.link} target="_blank">{post.title}</a>
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
                <iframe width="560" height="315" src={talk.link} />
                <div>{talk.date}</div>
            </div>
        ))}
    </div>
)

const App = () => (
    <div className="content">
            <Introduction />
            <Blogs2 />
            <Talks />
            <HobbyProjects />
            <TechVisualization />
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'))