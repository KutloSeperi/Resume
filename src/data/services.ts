export interface ServiceTier {
  name: string
  price: string
  description: string
  note?: string
}

export const services: ServiceTier[] = [
  {
    name: 'Simple Website',
    price: 'R5,000',
    description:
      'A clean, professional website tailored to your brand. Perfect for individuals, freelancers, and small businesses looking to establish an online presence.',
    note: 'Includes 3 months free hosting, then R299/month'
  },
  {
    name: 'Custom Website',
    price: 'R10,000',
    description:
      'A fully custom-designed and developed website with advanced functionality, unique design, and tailored features to match your specific business needs.'
  },
  {
    name: 'Business Automation / System',
    price: 'Price on application',
    description:
      'Describe your business idea and Kutlo will transform it into a fully automated system — from workflow automation to custom internal tools and integrations.'
  }
]
