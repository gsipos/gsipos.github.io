export interface BlogPost {
  title: string;
  published: string;
  link: string;
}

export interface Talk {
  title: string;
  date: string;
  link: string;
  event: string;
  slides?: string;
}

export interface Tech {
  name: string;
  logo: string;
  expertise: number;
}

export interface Contact {
  name: string;
  url: string;
  logo: string;
}

export interface Profile {
  name: string;
  github: string;
  blogs: BlogPost[];
  talks: Talk[];
  tech: Tech[];
  contacts: Contact[];
}

declare module "*.png";
declare module "*.svg";

import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import typescript from "../../assets/logos/typescript.png";
import javascript from "../../assets/logos/javascript.png";
import angular from "../../assets/logos/angular.png";
import angularjs from "../../assets/logos/angularjs.svg";
import reactLogo from "../../assets/logos/react.svg";
import rxjs from "../../assets/logos/rxjs.png";
import nodejs from "../../assets/logos/nodejs.png";
import electron from "../../assets/logos/electron.png";
import npm from "../../assets/logos/npm.png";
import webpack from "../../assets/logos/webpack.png";
import java from "../../assets/logos/java_logo.png";
import gcp from "../../assets/logos/gcp.png";
import appEngine from "../../assets/logos/app-engine.png";
import datastore from "../../assets/logos/datastore-logo.png";
import firebase from "../../assets/logos/firebase.png";
import vscode from "../../assets/logos/vs-code.jpg";
import github from "../../assets/logos/github.png";
import stackoverflow from "../../assets/logos/stackoverflow-icon.svg";
import linkedIn from "../../assets/logos/linkedin-logo.png";

const techs: Tech[] = [
  { name: "HTML", logo: html, expertise: 100 },
  { name: "CSS", logo: css, expertise: 100 },
  { name: "TypeScript", logo: typescript, expertise: 100 },
  { name: "JavaScript", logo: javascript, expertise: 90 },
  { name: "Angular", logo: angular, expertise: 90 },
  { name: "AngularJS", logo: angularjs, expertise: 90 },
  { name: "React", logo: reactLogo, expertise: 50 },
  { name: "RxJS", logo: rxjs, expertise: 50 },
  { name: "Node.js", logo: nodejs, expertise: 30 },
  { name: "Electron", logo: electron, expertise: 10 },
  { name: "npm", logo: npm, expertise: 70 },
  { name: "Webpack", logo: webpack, expertise: 60 },
  { name: "Java", logo: java, expertise: 60 },
  { name: "GCP", logo: gcp, expertise: 60 },
  { name: "App Engine", logo: appEngine, expertise: 60 },
  { name: "GCP Datastore", logo: datastore, expertise: 60 },
  { name: "Firebase", logo: firebase, expertise: 30 },
  { name: "VS Code", logo: vscode, expertise: 60 },
  { name: "Github", logo: github, expertise: 90 }
];
techs.sort((a, b) => b.expertise - a.expertise);

export const profile: Readonly<Profile> = Object.freeze({
  name: "Gergely Sipos",
  currentJob: {
    title: "Frontend Architect",
    company: "Doctusoft"
  },
  github: "gsipos",
  contacts: [
    {
      name: "Stackoverflow",
      logo: stackoverflow,
      url: "https://stackoverflow.com/users/6922682/gergely-sipos"
    },
    {
      name: "github",
      logo: github,
      url: "https://github.com/gsipos"
    },
    {
      name: "LinkedIn",
      logo: linkedIn,
      url: "https://www.linkedin.com/in/gergelysipos/"
    }
  ],
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
      title: "Yo! Npm, bower pls, thx!",
      published: "2015-09-23",
      link:
        "https://medium.com/doctusoft-coding-style/yo-npm-bower-pls-thx-9ea28d78f47"
    }
  ],
  talks: [
    {
      title: "Angular 2+ components with RxJS",
      date: "2017-11-25",
      link: "",
      event: "DevFest Vienna 2017",
      slides:
        "https://docs.google.com/presentation/d/1hQZuH4WBUEPxZ2QVxIU722XESJ3XOkjEjjwB9gTmZeA/edit?usp=sharing"
    },
    {
      title: "Angular 2+ components with RxJS",
      date: "2017-10-10",
      event: "DevFest Budapest 2017",
      link: "https://www.youtube.com/embed/7q_63b5m_vM"
    },
    {
      title: "Angular 2.0. vs. React",
      date: "2017-02-23",
      event: "GDG Budapest meetup",
      link: "https://www.youtube.com/embed/NiV3evwl4yY"
    }
  ],
  tech: techs
});
