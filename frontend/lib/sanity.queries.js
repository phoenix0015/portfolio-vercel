import { client } from './sanity.client'
import { urlFor } from './sanity.client'

export async function getProjects() {
  const query = `*[_type == "project"] {
    title,
    description,
    image,
    skills
  }`

  const projects = await client.fetch(query)
  return projects.map(project => ({
    ...project,
    imageUrl: project.image ? urlFor(project.image).url() : null
  }))
} 