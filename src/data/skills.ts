export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Front-End Architecture',
    skills: ['Nuxt.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'jQuery', 'AJAX']
  },
  {
    name: 'Back-End & Databases',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'MySQL', 'Doctrine ORM', 'Drizzle ORM']
  },
  {
    name: 'DevOps & Environment',
    skills: ['Docker', 'Linux', 'Git Version Control', 'RESTful API Integration']
  },
  {
    name: 'Methodologies',
    skills: ['AI-Assisted Development (Advanced Prompt Engineering)', 'Agile/Scrum', 'Automated Software Testing', 'Selenium Automation', 'Appium', 'ISTQB Principles']
  }
]
