export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['PHP', 'JavaScript', 'jQuery', 'CSS', 'TypeScript', 'Tailwind']
  },
  {
    name: 'Frameworks',
    skills: ['Vue.js', 'Laravel', 'SASS', 'Bootstrap', 'Nuxt.js', 'DaisyUI']
  },
  {
    name: 'Design',
    skills: ['UI/UX', 'Figma']
  },
  {
    name: 'Tools',
    skills: ['Doctrine ORM', 'MongoDB', 'Node.js', 'Express.js', 'Linux', 'Docker', 'WordPress', 'Git', 'Drizzle']
  }
]
