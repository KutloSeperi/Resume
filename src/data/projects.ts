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
      'A responsive, user-focused website built using HTML, CSS, JavaScript, and Sass, with a backend server for email enquiries.',
    url: 'https://kutloseperi.github.io/Techprime_Website/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Sass']
  }
]
