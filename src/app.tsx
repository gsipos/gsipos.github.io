import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { profile } from "./data/data.source"
import { TechVisualization } from './tech-visualization/tech'

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
            <div>🚧 This site is under construction. 🚧</div>
        </div>
    </div>
)

const Expertise = () => (
    <div className="strip">
        <div className="left fadeIn anim-delay-2">
            <h1>My expertise</h1>
            <div className="description">
                I love mastering new technologies.
                    Currently my focus is on the Javascript ecosystem.
                    Coding is my passion.
                </div>
        </div>
        <div className="right fadeIn anim-delay-3">
            <div className="flex">
                <img className="logo" src="assets/logos/typescript.png" alt="Typescript" />
                <img className="logo" src="assets/logos/javascript.png" alt="Javascript" />
                <img className="logo" src="assets/logos/Java_logo_icon.png" alt="Java" />
            </div>
            <div className="flex">
                <img className="logo" src="assets/logos/angular.png" alt="Angular 2+" />
                <img className="logo" src="assets/logos/vs-code.png" alt="VS Code" />
                <img className="logo" src="assets/logos/nodejs.png" alt="NodeJS" />
            </div>
            <div className="flex">
                <img className="logo" src="assets/logos/gcp.png" alt="Google Cloud Platform" />
                <img className="logo" src="assets/logos/app-engine.png" alt="Google App Engine" />
            </div>
        </div>
    </div>
)

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

const Talks = () => (
    <div className="strip">
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
        <MainIntroduction />
        <Expertise />
        <TechVisualization />
        <Blogs />
        <Talks />
        <div className="strip footer">@2017 by Gergely Sipos</div>
    </div>
)


ReactDOM.render(<App />, document.getElementById('app'))