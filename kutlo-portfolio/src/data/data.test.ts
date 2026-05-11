import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { skillCategories, type SkillCategory } from './skills'
import { projects, type Project } from './projects'
import { services, type ServiceTier } from './services'

// Feature: kutlo-portfolio, Property 5: Skill categories are non-empty
describe('Property 5: Skill categories are non-empty', () => {
  it('every skill category has a non-empty name and at least one non-whitespace skill', () => {
    // Validates: Requirements 3.1–3.5
    fc.assert(
      fc.property(fc.constantFrom(...skillCategories), (category: SkillCategory) => {
        expect(category.name.trim()).not.toBe('')
        expect(category.skills.length).toBeGreaterThan(0)
        for (const skill of category.skills) {
          expect(skill.trim()).not.toBe('')
        }
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: kutlo-portfolio, Property 6: Project cards contain required fields
describe('Property 6: Project cards contain required fields', () => {
  it('every project has non-empty name, description, url, and at least one tag', () => {
    // Validates: Requirements 6.2
    fc.assert(
      fc.property(fc.constantFrom(...projects), (project: Project) => {
        expect(project.name.trim()).not.toBe('')
        expect(project.description.trim()).not.toBe('')
        expect(project.url.trim()).not.toBe('')
        expect(project.tags.length).toBeGreaterThan(0)
        for (const tag of project.tags) {
          expect(tag.trim()).not.toBe('')
        }
      }),
      { numRuns: 100 }
    )
  })
})

// Feature: kutlo-portfolio, Property 7: Service tiers contain required fields
describe('Property 7: Service tiers contain required fields', () => {
  it('every service tier has non-empty name, price, and description', () => {
    // Validates: Requirements 7.2
    fc.assert(
      fc.property(fc.constantFrom(...services), (tier: ServiceTier) => {
        expect(tier.name.trim()).not.toBe('')
        expect(tier.price.trim()).not.toBe('')
        expect(tier.description.trim()).not.toBe('')
      }),
      { numRuns: 100 }
    )
  })
})
