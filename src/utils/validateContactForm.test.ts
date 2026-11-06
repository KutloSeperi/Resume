import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { validateContactForm, isFormValid } from './validateContactForm'

// Arbitrary for valid email addresses
const validEmail = fc
  .tuple(
    fc.stringMatching(/^[a-z]{1,10}$/),
    fc.stringMatching(/^[a-z]{1,10}$/),
    fc.constantFrom('com', 'net', 'org', 'io', 'co.za')
  )
  .map(([local, domain, tld]) => `${local}@${domain}.${tld}`)

// Arbitrary for non-empty, non-whitespace strings
const nonEmptyString = fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0)

// Arbitrary for whitespace-only strings
const whitespaceString = fc
  .array(fc.constantFrom(' ', '\t', '\n'), { minLength: 1, maxLength: 10 })
  .map((chars) => chars.join(''))

// Feature: kutlo-portfolio, Property 1: Contact form rejects empty required fields
describe('Property 1: Contact form rejects empty required fields', () => {
  it('empty or whitespace-only name produces a name error', () => {
    // Validates: Requirements 9.4
    fc.assert(
      fc.property(
        fc.oneof(fc.constant(''), whitespaceString),
        validEmail,
        nonEmptyString,
        (name, email, message) => {
          const errors = validateContactForm({ name, email, message })
          expect(errors.name).not.toBe('')
        }
      ),
      { numRuns: 100 }
    )
  })

  it('empty or whitespace-only email produces an email error', () => {
    // Validates: Requirements 9.4
    fc.assert(
      fc.property(
        nonEmptyString,
        fc.oneof(fc.constant(''), whitespaceString),
        nonEmptyString,
        (name, email, message) => {
          const errors = validateContactForm({ name, email, message })
          expect(errors.email).not.toBe('')
        }
      ),
      { numRuns: 100 }
    )
  })

  it('empty or whitespace-only message produces a message error', () => {
    // Validates: Requirements 9.4
    fc.assert(
      fc.property(
        nonEmptyString,
        validEmail,
        fc.oneof(fc.constant(''), whitespaceString),
        (name, email, message) => {
          const errors = validateContactForm({ name, email, message })
          expect(errors.message).not.toBe('')
        }
      ),
      { numRuns: 100 }
    )
  })
})

// Feature: kutlo-portfolio, Property 2: Contact form accepts valid submissions
describe('Property 2: Contact form accepts valid submissions', () => {
  it('non-empty name, valid email, non-empty message produces no errors', () => {
    // Validates: Requirements 9.3
    fc.assert(
      fc.property(nonEmptyString, validEmail, nonEmptyString, (name, email, message) => {
        const errors = validateContactForm({ name, email, message })
        expect(isFormValid(errors)).toBe(true)
      }),
      { numRuns: 100 }
    )
  })
})
