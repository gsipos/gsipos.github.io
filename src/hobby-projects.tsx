import * as React from 'react'
import * as d3 from 'd3'
import { profile } from "./data/data.source"

interface Repo {
    id: number;
    name: string;
    fork: boolean;
    description: string;
    html_url: string;
    size: number;
}


export class HobbyProjects extends React.Component<{}, { repos: Repo[] }> {

    constructor() {
        super();
        this.state = { repos: [] };
        fetch("https://api.github.com/users/gsipos/repos")
            .then(res => res.json())
            .then(repos => this.setState({ repos }))
    }

    render() {
        const myRepos = this.state.repos
            .sort((a, b) => a.size - b.size)
            .filter(r => !r.fork)
        const contributions = this.state.repos
            .filter(repo => repo.fork)
        return (
            <div>
                <div className="strip projects">
                    <div className="left">
                        <h1>My Hobby Projects</h1>
                    </div>
                    <div className="right">
                        {myRepos.map(repo => (
                            <div className="repo" key={repo.id}>
                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                                <div>{repo.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="strip projects">
                    <div className="left">
                        <h1>Forks</h1>
                    </div>
                    <div className="right">
                        {contributions.map(repo => (
                            <div className="repo" key={repo.id}>
                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                                <div>{repo.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}