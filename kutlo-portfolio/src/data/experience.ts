export interface ExperienceEntry {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Junior Software Developer',
    company: 'Two Men And A Truck',
    period: 'April 2025 – Present',
    description:
      'Building and maintaining the Ox Box storage management platform and the Two Men And A Truck logistics platform using Vue.js, Laravel, and related technologies.',
    highlights: [
      'Developed Ox Box (oxbox.co.za), a storage management platform serving active clients',
      'Reduced manual data capture by 60% through automated workflows',
      'Contributed to the Two Men And A Truck (twomenandatruck.co.za) logistics platform',
      'Implemented new features using Vue.js and Laravel within an Agile team'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'TechPrime',
    period: 'January 2023 – July 2024',
    description:
      'Designed and developed a full website using JavaScript, Express, Node.js, HTML, and SASS. Collaborated with a QA team on a data migration project from Oracle to Google Cloud. Implemented front-end and back-end features and worked with cross-functional teams on testing, deployment, and maintenance.',
    highlights: [
      'Designed and developed the full TechPrime website using JavaScript, Express, Node.js, HTML, and SASS',
      'Collaborated with QA team on data migration from Oracle to Google Cloud',
      'Implemented front-end and back-end features across multiple product areas',
      'Worked with cross-functional teams on testing, deployment, and maintenance'
    ]
  }
]
