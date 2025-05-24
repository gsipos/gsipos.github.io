export interface BlogPost {
  title: string
  published: string
  link: string
}

export interface Talk {
  title: string
  date: string
  link: string
  event: string
  slides?: string
}

export interface Tech {
  name: string
}

export interface Contact {
  name: string
  url: string
  logo: string
}

export interface Profile {
  name: string
  github: string
  blogs: BlogPost[]
  talks: Talk[]
  tech: Tech[]
  contacts: Contact[]
}

declare module '*.png'
declare module '*.svg'

import github from '../../assets/logos/github.png'
import stackoverflow from '../../assets/logos/stackoverflow-icon.svg'
import linkedIn from '../../assets/logos/linkedin-logo.png'

const techs: Tech[] = [
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Java' },
  { name: 'Node.js' },
  { name: 'npm' },
  { name: 'React' },
  { name: 'MobX' },
  { name: 'styled-components' },
  { name: 'Angular' },
  { name: 'AngularJS' },
  { name: 'RxJS' },
  { name: 'Electron' },
  { name: 'Webpack' },
  { name: 'Parcel' },
  { name: 'Google Cloud Platform' },
  { name: 'Google App Engine' },
  { name: 'GCP Datastore' },
  { name: 'Firebase' },
  { name: 'VS Code' },
  { name: 'Github' },
]

export const profile: Readonly<Profile> = Object.freeze({
  name: 'Gergely Sipos',
  currentJob: {
    title: 'Frontend Architect',
    company: 'Doctusoft',
  },
  github: 'gsipos',
  contacts: [
    {
      name: 'Stackoverflow',
      logo: stackoverflow,
      url: 'https://stackoverflow.com/users/6922682/gergely-sipos',
    },
    {
      name: 'github',
      logo: github,
      url: 'https://github.com/gsipos',
    },
    {
      name: 'LinkedIn',
      logo: linkedIn,
      url: 'https://www.linkedin.com/in/gergelysipos/',
    },
  ],
  blogs: [
    {
      title: 'Rate limiting in rxjs',
      published: '2017-10-20',
      link: 'https://medium.com/@doctusoft/rate-limiting-in-rxjs-3a85a4ab6da4',
    },
    {
      title: 'A word on Typescript',
      published: '2015-12-08',
      link: 'https://medium.com/@doctusoft/a-word-on-typescript-d5390d926d90',
    },
    {
      title: 'Yo! Npm, bower pls, thx!',
      published: '2015-09-23',
      link: 'https://medium.com/doctusoft-coding-style/yo-npm-bower-pls-thx-9ea28d78f47',
    },
  ],
  talks: [
    {
      title: 'Angular 2+ components with RxJS',
      date: '2017-11-25',
      link: '',
      event: 'DevFest Vienna 2017',
      slides: 'https://docs.google.com/presentation/d/1hQZuH4WBUEPxZ2QVxIU722XESJ3XOkjEjjwB9gTmZeA/edit?usp=sharing',
    },
    {
      title: 'Angular 2+ components with RxJS',
      date: '2017-10-10',
      event: 'DevFest Budapest 2017',
      link: 'https://www.youtube.com/embed/7q_63b5m_vM',
    },
    {
      title: 'Angular 2.0. vs. React',
      date: '2017-02-23',
      event: 'GDG Budapest meetup',
      link: 'https://www.youtube.com/embed/NiV3evwl4yY',
    },
  ],
  tech: techs,
})
