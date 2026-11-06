import { certifications } from '../src/data/education'
import { projects } from '../src/data/projects'
import { services } from '../src/data/services'
import { skillCategories } from '../src/data/skills'

interface KnowledgeDocument {
  title: string
  content: string
  keywords: string[]
}

export const knowledge: KnowledgeDocument[] = [
  {
    title: 'About Kutlo',
    content:
      'Kutlo Seperi is a Full Stack Developer and Junior Software Engineer based in Cape Town, South Africa. He is adaptive, disciplined, and autonomous, and prefers remote-first or high-responsibility environments. He values clean code, clear reasoning, ownership, and measurable commercial value. His "Under the Bonnet" approach means understanding how systems work and why technical choices are made, rather than only making features work.',
    keywords: ['Kutlo', 'about', 'background', 'person', 'location', 'from', 'hometown', 'Cape Town', 'South Africa', 'developer', 'approach', 'strengths', 'work preferences', 'remote', 'autonomous', 'under the bonnet', 'engineering philosophy', 'mindset']
  },
  {
    title: 'Interests and personal growth',
    content:
      'Outside work, Kutlo enjoys playing guitar, following rugby, and reading. He is committed to continuous learning and keeps up with developments in software, frameworks, architectures, and developer tools.',
    keywords: ['interests', 'hobbies', 'outside work', 'personal', 'guitar', 'music', 'rugby', 'sports', 'reading', 'books', 'continuous learning', 'growth']
  },
  {
    title: 'Engineering methods',
    content:
      'Kutlo uses AI-assisted engineering, including LLM prompting and automated refactoring, to accelerate delivery and learn frameworks, while reviewing generated work to understand its structure. His engineering priorities include performance and SEO through code splitting, smaller asset payloads, and asynchronous data fetching, as well as automating business workflows to reduce manual work and data-capture errors.',
    keywords: ['Kutlo', 'methodology', 'methods', 'engineering philosophy', 'under the bonnet', 'AI-assisted', 'LLM', 'prompting', 'refactoring', 'performance', 'SEO', 'code splitting', 'asset payload', 'asynchronous', 'data fetching', 'automation', 'workflow']
  },
  {
    title: 'Two Men And A Truck — ERP platform',
    content:
      'Kutlo is a Junior Software Engineer and Full Stack Developer at Two Men And A Truck South Africa and Ox Box (April 2025–present), working full-time in Cape Town in a lean, agile team. He helps scale, maintain, and modernize a mission-critical ERP ecosystem used by two live logistics and storage brands. It runs 24/7 and handles close to 400 booked jobs per month across quoting, autobooking, move and job management, storage, and delivery. Implementations are connected to a logs table for monitoring, debugging, and feedback.',
    keywords: ['Kutlo', 'experience', 'experienced', 'years', 'career', 'work history', 'work', 'works', 'employer', 'company', 'job', 'role', 'roles', 'past roles', 'previous jobs', 'Two Men And A Truck', 'ERP', 'platform', '400', 'bookings', 'logistics', 'storage', 'team']
  },
  {
    title: 'Career and work history',
    content:
      'Kutlo has worked as a Front-End Developer at TechPrime Project from February to July 2024. Since April 2025, he has worked full-time as a Junior Software Engineer and Full Stack Developer at Two Men And A Truck South Africa and Ox Box.',
    keywords: ['Kutlo', 'career', 'employment', 'work history', 'roles', 'past roles', 'previous jobs', 'experience', 'employer', 'company', 'TechPrime', 'Two Men And A Truck', 'Ox Box']
  },
  {
    title: 'Storage booking and ERP systems',
    content:
      'Kutlo integrated the storage booking workflow into the admin-facing quote system to capture structured information at quoting. He adjusted existing query strings for new integrations and designed scalable Doctrine ORM schemas. Process automation reduced manual data capture for storage coordinators by about 60%.',
    keywords: ['storage', 'booking', 'workflow', 'quote', 'quoting', 'admin', 'query', 'Doctrine', 'ORM', 'schema', 'database', '60%', 'automation']
  },
  {
    title: 'Payments, invoicing, and job lifecycle',
    content:
      'Using PHP and Doctrine ORM, Kutlo built unallocated payment-matching logic to link incoming payments to the correct jobs across 300+ monthly jobs. Automated invoicing and payment-link flows reduced payment matching errors by roughly 40%. He built and updated payment webhooks, status-driven job and payment lifecycle logic, and validated quote and booking fields with pricing logic.',
    keywords: ['backend', 'PHP', 'Doctrine', 'payment', 'payments', 'matching', 'invoice', 'invoicing', 'payment link', 'webhook', 'lifecycle', 'jobs', '40%']
  },
  {
    title: 'Proof of delivery and internal tools',
    content:
      'Kutlo built a digital proof-of-delivery form that lists items due for delivery and lets recipients confirm them, add discrepancy notes, and capture date and time. It requires signatures from both the client and move manager and locks after signing. He also implemented an internal holiday calendar used for leave calendars and leave requests.',
    keywords: ['proof', 'delivery', 'POD', 'signature', 'signatures', 'form', 'items', 'discrepancy', 'holiday', 'calendar', 'leave', 'internal tools']
  },
  {
    title: 'Frontend development and performance',
    content:
      'Using jQuery and AJAX, Kutlo developed and redesigned the Ox Box frontend from design mockups and connected it to the AJAX API. Mobile responsiveness improvements contributed to a 25% increase in completed mobile quote requests. AJAX loading for job calendars and data-heavy pages reduced back-office page load times by up to 80%.',
    keywords: ['frontend', 'front-end', 'jQuery', 'AJAX', 'Ox Box', 'mobile', 'responsive', 'quote requests', '25%', 'performance', 'page load', '80%']
  },
  {
    title: 'Integrations and workflow automation',
    content:
      'Kutlo integrated Google Maps API to check coordinates and prefill carry distance during quoting, increasing quote generation speed by roughly 50% and reducing manual pricing errors. The location data supports pricing and dispatch calculations involving routes and carry distances. He built a status-triggered email system using dynamic localised templates for booking confirmations, tracking updates, and invoices. It automated about 70% of routine client emails and saves the sales team roughly 15 hours per week. Admins can handle 10+ clients at once with minimal manual work.',
    keywords: ['Google Maps', 'API', 'coordinates', 'carry distance', 'route', 'dispatch', 'pricing', 'quote', '50%', 'integration', 'email', 'emails', 'automation', '70%', '15 hours', 'clients', 'localised']
  },
  {
    title: 'Ecommerce shop',
    content:
      'Kutlo co-developed the client-facing and admin-facing sides of an ecommerce shop, integrated it with the existing move and delivery workflow, and adjusted job assignment to account for shop-generated delivery jobs.',
    keywords: ['ecommerce', 'e-commerce', 'shop', 'store', 'client-facing', 'admin-facing', 'delivery', 'job assignment', 'integration']
  },
  {
    title: 'Architecture migration',
    content:
      'Kutlo is part of a three-person team migrating a legacy monolithic PHP and jQuery system to a modern decoupled architecture. He built and launched the initial frontend MVP with reusable, strongly typed Vue 3 and Nuxt.js components using TypeScript, Tailwind CSS, and DaisyUI. The MVP connects to PostgreSQL through Drizzle ORM and uses existing PHP REST API endpoints for legacy pages.',
    keywords: ['architecture', 'migration', 'legacy', 'monolith', 'decoupled', 'Vue', 'Vue 3', 'Nuxt', 'Nuxt.js', 'TypeScript', 'Tailwind', 'DaisyUI', 'PostgreSQL', 'Drizzle', 'REST', 'MVP']
  },
  {
    title: 'DevOps and production support',
    content:
      'Kutlo manages Git workflow including pulls, merges, conflict resolution, and production updates. He works daily in Docker and Linux environments, supports production releases and stable uptime for a 24/7 system, and debugs and maintains production software.',
    keywords: ['DevOps', 'Git', 'pulls', 'merges', 'conflicts', 'Docker', 'Linux', 'production', 'deployment', 'uptime', 'support', 'debugging']
  },
  {
    title: 'TechPrime internship',
    content:
      'As a Front-End Developer intern at TechPrime Project (February–July 2024), Kutlo developed a responsive website using HTML, CSS, JavaScript, and Sass. He collaborated with clients, integrated a backend for email enquiries, incorporated UI/UX feedback, managed deadlines, and performed cross-browser testing and debugging.',
    keywords: ['TechPrime', 'internship', 'intern', 'experience', 'experienced', 'years', 'work history', 'past roles', 'previous jobs', 'role', 'roles', 'front-end', 'frontend', 'HTML', 'CSS', 'JavaScript', 'Sass', 'client', 'email', 'cross-browser', 'testing']
  },
  {
    title: 'Technical skills and working methods',
    content:
      'Kutlo works with PHP, Nuxt.js, Vue.js, TypeScript, JavaScript, Tailwind CSS, DaisyUI, jQuery, AJAX, Laravel, Node.js, Express.js, PostgreSQL, MongoDB, MySQL, Doctrine ORM, Drizzle ORM, Docker, Linux, Git version control, and RESTful API integration. His quality assurance knowledge includes Selenium automation, Appium, and ISTQB principles. His methods include AI-assisted development with advanced prompt engineering, Agile/Scrum, and automated software testing.',
    keywords: ['skills', 'technologies', 'tech stack', 'PHP', 'Nuxt', 'Vue', 'TypeScript', 'JavaScript', 'Tailwind', 'DaisyUI', 'jQuery', 'AJAX', 'Laravel', 'Node', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL', 'Doctrine', 'Drizzle', 'Docker', 'Linux', 'Git', 'REST', 'AI', 'prompt engineering', 'Agile', 'Scrum', 'automated testing', 'Selenium', 'Appium', 'ISTQB', 'QA']
  },
  {
    title: 'Education and qualifications',
    content:
      'Kutlo completed an ICT Advanced Diploma in Multimedia Applications at Cape Peninsula University of Technology in 2025 (NQF Level 7), following an ICT Diploma in Multimedia Applications there from 2022 to 2024 (NQF Level 6). He completed Computer Administration at Prestige Business College in 2021 (NQF Level 5) and a National Senior Certificate at Reivilo Hoerskool in 2020 (NQF Level 4).',
    keywords: ['education', 'study', 'studied', 'qualification', 'degree', 'diploma', 'advanced diploma', 'CPUT', 'Cape Peninsula University of Technology', 'NQF', 'Prestige Business College', 'Reivilo']
  },
  ...certifications.map((certification) => ({
    title: certification.name,
    content: `${certification.name}, issued by ${certification.provider} in ${certification.date}.`,
    keywords: ['certification', 'certificate', 'certified', certification.name, certification.provider]
  })),
  ...projects.map((project) => ({
    title: project.name,
    content: `${project.description} Technologies: ${project.tags.join(', ')}. Website: ${project.url}`,
    keywords: ['project', 'portfolio', project.name, ...project.tags]
  })),
  ...services.map((service) => ({
    title: service.name,
    content: `${service.name}: ${service.price}. ${service.description} ${service.note ?? ''}`,
    keywords: ['service', 'services', 'price', 'pricing', 'cost', 'quote', service.name]
  })),
  ...skillCategories.map((category) => ({
    title: category.name,
    content: `${category.name}: ${category.skills.join(', ')}.`,
    keywords: ['skill', 'skills', 'technology', 'technologies', 'tech stack', category.name, ...category.skills]
  })),
  {
    title: 'Contact Kutlo',
    content: 'Email: kutlocoopseperi@gmail.com. Phone: 062 785 7296.',
    keywords: ['contact', 'email', 'phone', 'reach', 'call', 'message']
  }
]

const stopWords = new Set([
  'a', 'about', 'an', 'and', 'are', 'can', 'could', 'did', 'do', 'does', 'for', 'he', 'his',
  'how', 'i', 'has', 'have', 'in', 'is', 'it', 'me', 'many', 'much', 'of', 'on', 'offer',
  'offers', 'or', 'tell', 'that', 'the', 'they', 'this', 'to', 'what', 'when', 'where', 'which',
  'who', 'with', 'would', 'you', 'your'
])

function tokenize(value: string): string[] {
  const words = value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .match(/[a-z0-9]+/g) ?? []

  return words.map((word) => {
    if (['experienced', 'experiences', 'experinced', 'expeirnced', 'experince', 'fexperince'].includes(word)) {
      return 'experience'
    }

    if (word.length > 4 && word.endsWith('s') && !word.endsWith('ss')) {
      return word.slice(0, -1)
    }

    return word
  })
}

function scoreDocument(document: KnowledgeDocument, queryTerms: string[]) {
  const keywordTerms = new Set(document.keywords.flatMap(tokenize))
  const contentTerms = new Set(tokenize(document.content))
  let score = 0
  let matchCount = 0

  for (const term of queryTerms) {
    if (keywordTerms.has(term)) {
      score += 3
      matchCount += 1
    } else if (contentTerms.has(term)) {
      score += 1
      matchCount += 1
    }
  }

  return { document, score, matchCount }
}

export function retrieveKnowledge(query: string, limit = 4): KnowledgeDocument[] {
  const queryTerms = [...new Set(tokenize(query).filter((term) => !stopWords.has(term)))]
  if (queryTerms.length === 0) return []

  const ranked = knowledge
    .map((document) => scoreDocument(document, queryTerms))
    .filter(({ matchCount }) => matchCount >= Math.ceil(queryTerms.length / 2))
    .sort((a, b) => b.score - a.score)

  const bestScore = ranked[0]?.score ?? 0

  return ranked
    .filter(({ score }) => score >= bestScore - 1)
    .slice(0, limit)
    .map(({ document }) => document)
}

export function isSmallTalk(message: string): boolean {
  const text = message.trim().toLowerCase().replace(/[!.?,\s]+$/g, '')

  return /^(hi|hello|hey|yo|yow|sup|chat|good morning|good afternoon|good evening|how are you|how's it going|hows it going|what's up|whats up|thanks|thank you|lol|wtf|(well )?(then )?(take a wild guess|guess what|you guess))$/.test(text)
}

export function isThankYou(message: string): boolean {
  return /^(okay[, ]+|ok[, ]+|well[, ]+)?(thank you|thanks|thx|cheers)[!.?, ]*$/i.test(message.trim())
}

export function isAssistantQuestion(message: string): boolean {
  return /\b(harnessed|harnessing ai|are you an? (ai|chatbot|bot)|are you chatgpt)\b/i.test(message)
}

export function isAssistantFeedback(message: string): boolean {
  return /\bwhy\b.*\b(answer|respond|reply)\b|\byou\b.*\b(didn't|didnt|did not)\b.*\b(answer|reply|help)\b|\bnot\b.*\b(everything|everhting)\b.*\bfallback\b/i.test(message)
}

export function isKutloDetailQuestion(message: string): boolean {
  return /\b(kutlo|he|him|his)\b.*\b(age|old|born|birthday|live|from|work|company|employer|role|roles|career|experience|job|education|school|study|years?)\b|\b(age|old|born|birthday|live|from|work|company|employer|role|roles|career|experience|job|education|school|study|years?)\b.*\b(kutlo|he|him|his)\b/i.test(message)
}

export function isAffirmativeReply(message: string): boolean {
  return /^(yes|yeah|yep|sure|please|okay|ok|of course)[!.?,\s]*$/i.test(message.trim())
}

export function isExperienceDurationQuestion(message: string): boolean {
  const terms = tokenize(message)
  return terms.some((term) => term === 'year' || term === 'yr') &&
    terms.includes('experience')
}
