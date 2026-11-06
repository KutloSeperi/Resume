export interface ExperienceEntry {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Junior Software Engineer / Full Stack Developer',
    company: 'Two Men And A Truck',
    period: 'April 2025 – Present',
    description:
      'Building, scaling, and maintaining a 24/7 ERP platform across quoting, autobooking, move and job management, storage, and delivery for two national logistics and storage brands.',
    highlights: [
      'Supports a mission-critical platform handling close to 400 booked jobs per month',
      'Reduced manual data capture for storage coordinators by approximately 60%',
      'Built payment matching, automated invoicing, payment links, and status-driven job and payment workflows',
      'Developed an initial Vue 3 and Nuxt.js frontend MVP with TypeScript, Tailwind CSS, DaisyUI, PostgreSQL, and Drizzle ORM'
    ]
  },
  {
    title: 'Front-End Developer (Internship)',
    company: 'TechPrime Project',
    period: 'February 2024 – July 2024',
    description:
      'Developed a responsive, user-focused website using HTML, CSS, JavaScript, and Sass, including a backend server for email enquiries. Collaborated with clients, incorporated UI/UX feedback, and performed cross-browser testing and debugging.',
    highlights: [
      'Developed a responsive and user-centric website over a six-month internship',
      'Built a backend server to handle email enquiries',
      'Applied UI/UX improvements based on best practices and user feedback',
      'Managed project timelines and conducted cross-browser testing and debugging'
    ]
  }
]
