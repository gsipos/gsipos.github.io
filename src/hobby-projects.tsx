import * as React from 'react'
import { profile } from "./data/data.source"

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

    constructor() {
        super();
        this.state = { repos: [] };
        fetch("https://api.github.com/users/gsipos/repos")
            .then(res => res.json())
            .then(filterOutForks)
            .then(repos => this.setState({ repos }))
    }

    render() {
        const myRepos = this.state.repos
            .sort((a, b) => a.size - b.size)
        return (
            <div className="glass projects">
                <h1>Hobby Projects</h1>
                {myRepos.map(repo => (
                    <div className="repo" key={repo.id}>
                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                        <div>{repo.description}</div>
                    </div>
                ))}
            </div>
        )
    }
}