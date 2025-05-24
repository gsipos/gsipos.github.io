import { file } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const profile = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    currentJob: z.object({
      title: z.string(),
      company: z.string(),
    }),
    github: z.string(),
  }),
})

const tech = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
})

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    event: z.string(),
    videoLink: z.string().optional(),
    slides: z.string().optional(),
  }),
})

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.string(),
    link: z.string().optional(),
  }),
})

const contacts = defineCollection({
  loader: file('src/content/contacts/contacts.json'),
  schema: ({ image }) => z.object({
    name: z.string(),
    url: z.string(),
    logo: image().optional(),
    simpleIcon: z.string().optional(),
  }),
})

export const collections = {
  talks,
  blogs,
  contacts,
  tech,
  profile,
}
