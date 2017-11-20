export interface BlogPost {
    title: string;
    published: string;
    link: string;
}

export interface Talk {
    title: string;
    date: string;
    link: string;
}

export interface Tech {
    name: string;
    logo: string;
    expertise: number;
}
export interface Profile {
    name: string;
    github: string;
    blogs: BlogPost[];
    talks: Talk[];
    techLogoRoot: string;
    tech: Tech[];
}

export const profile: Readonly<Profile> = Object.freeze({
    name: 'Gergely Sipos',
    currentJob: {
        title: "Frontend Architect",
        company: "Doctusoft"
    },
    github: "gsipos",
    blogs: [
        {
            title: "Rate limiting in rxjs",
            published: "2017-10-20",
            link: "https://medium.com/@doctusoft/rate-limiting-in-rxjs-3a85a4ab6da4"
        },
        {
            title: "A word on Typescript",
            published: "2015-12-08",
            link: "https://medium.com/@doctusoft/a-word-on-typescript-d5390d926d90"
        },
        {
            title: "A word on Typescript",
            published: "2015-09-23",
            link: "https://medium.com/doctusoft-coding-style/yo-npm-bower-pls-thx-9ea28d78f47"
        }
    ],
    talks: [
        {
            title: "Angular 2+ components with RxJS",
            date: "2017-10-10",
            link: "https://www.youtube.com/embed/7q_63b5m_vM"
        },
        {
            title: "Angular 2.0. vs. React",
            date: "2017-02-23",
            link: "https://www.youtube.com/embed/NiV3evwl4yY"
        }
    ],
    techLogoRoot: "assets/logos/",
    tech: [
        { name: "HTML", logo: "html.png", expertise: 100 },
        { name: "CSS", logo: "css.png", expertise: 100 },
        { name: "TypeScript", logo: "typescript.png", expertise: 100 },
        { name: "JavaScript", logo: "javascript.png", expertise: 90 },
        { name: "Angular",    logo: "angular.png", expertise: 90 },
        { name: "AngularJS",  logo: "angularjs.svg", expertise: 90 },
        { name: "React", logo: "react.svg", expertise: 50 },
        { name: "RxJS", logo: "rxjs.png", expertise: 50 },
        { name: "Node.js", logo: "nodejs.png", expertise: 30 },
        { name: "Electron", logo: "electron.png", expertise: 10 },
        { name: "npm",        logo: "npm.png", expertise: 70 },
        { name: "Webpack",    logo: "webpack.png", expertise: 60 },
        { name: "Java",       logo: "java_logo_icon.png", expertise: 60 },
        { name: "GCP",        logo: "gcp.png", expertise: 60 },
        { name: "App Engine", logo: "app-engine.png", expertise: 60 },
        { name: "GCP Datastore", logo: "datastore-logo.png", expertise: 60 },
        { name: "Firebase",    logo: "firebase.png", expertise: 30 },
        { name: "VS Code", logo: "vs-code.jpg", expertise: 60 },
        { name: "Github", logo: "github.png", expertise: 90 },

    ]
})
