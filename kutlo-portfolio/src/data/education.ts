export interface ModuleYear {
  year: string
  period: string
  items: string[]
}

export interface EducationEntry {
  institution: string
  qualification: string
  period: string
  description?: string
  modules?: ModuleYear[]
}

export interface Certification {
  name: string
  provider: string
  date: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Cape Peninsula University of Technology (CPUT)',
    qualification: 'ICT Advanced Diploma in Multimedia Applications',
    period: '2025',
    description: 'Advanced diploma building on the foundational diploma with specialisation in multimedia applications and ICT.'
  },
  {
    institution: 'Cape Peninsula University of Technology (CPUT)',
    qualification: 'ICT Diploma in Multimedia Applications',
    period: 'January 2022 – December 2024',
    description:
      'Developed skills in multimedia software, web design, UI/UX, and programming across a three-year programme.',
    modules: [
      {
        year: 'Year 1',
        period: 'Jan 2022 – Dec 2022',
        items: [
          'Applications Development Foundations 1',
          'Business Practice 1',
          'Communications Networks Foundations 1',
          'ICT Fundamentals 1',
          'Multimedia Foundations 1',
          'Professional Communications 1',
          'Programming 1',
          'Project 1'
        ]
      },
      {
        year: 'Year 2',
        period: 'Jan 2023 – Dec 2023',
        items: [
          'Applications Development Fundamentals 2',
          'Communications Networks Fundamentals 2',
          'ICT Electives 2 (Artificial Intelligence)',
          'Information Management 2',
          'Multimedia Applications Fundamentals 2',
          'Multimedia Design 2',
          'Multimedia Practice 2',
          'Multimedia Technology 2',
          'Professional Communications 2',
          'Project 2'
        ]
      },
      {
        year: 'Year 3',
        period: 'Jan 2024 – Dec 2024',
        items: [
          'ICT Electives 3 (Laravel)',
          'Multimedia Design 3',
          'Multimedia Practice 3',
          'Multimedia Technology 3',
          'Professional Practice 3',
          'Project 3',
          'Project Management 3',
          'Project Presentation 3'
        ]
      },
      {
        year: 'Year 4',
        period: '2025',
        items: [
          'Media Communications 4',
          'Media Technology (React Native, Angular) 4',
          'Professional Development 4',
          'Research Methodologies 4',
          'Project 4'
        ]
      }
    ]
  },
  {
    institution: 'Prestige Business College',
    qualification: 'Computer Administrations',
    period: '2021'
  },
  {
    institution: 'Reivilo Hoerskool',
    qualification: 'National Senior Certificate',
    period: '2020'
  }
]

export const certifications: Certification[] = [
  {
    name: 'ISTQB Foundation Level',
    provider: 'Udemy',
    date: 'June 2024'
  },
  {
    name: 'Selenium Automation Testing',
    provider: 'Udemy',
    date: '2023'
  }
]
