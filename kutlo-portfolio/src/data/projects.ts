export interface Project {
  name: string
  description: string
  url: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Ox Box',
    description:
      'A storage management platform built at Two Men And A Truck, enabling clients to manage and track their stored items online.',
    url: 'https://oxbox.co.za/',
    tags: ['Vue.js', 'Laravel', 'PHP', 'TypeScript']
  },
  {
    name: 'Two Men And A Truck',
    description:
      'A logistics and moving services platform connecting customers with professional movers across South Africa.',
    url: 'https://twomenandatruck.co.za/',
    tags: ['Vue.js', 'Laravel', 'PHP']
  },
  {
    name: 'TechPrime Website',
    description:
      'A responsive IT consulting website featuring custom animations, built using HTML, SCSS, JavaScript, and Node.js.',
    url: 'https://kutloseperi.github.io/Techprime_Website/',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Node.js']
  }
]
