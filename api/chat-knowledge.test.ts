import { describe, expect, it } from 'vitest'
import {
  isAffirmativeReply,
  isAssistantFeedback,
  isAssistantQuestion,
  isExperienceDurationQuestion,
  isKutloDetailQuestion,
  isSmallTalk,
  isThankYou,
  knowledge,
  retrieveKnowledge
} from './chat-knowledge'

describe('chatbot knowledge retrieval', () => {
  it('retrieves the matching service and its pricing', () => {
    const results = retrieveKnowledge('How much does a simple website cost?')

    expect(results[0]?.title).toBe('Simple Website')
    expect(results[0]?.content).toContain('R5,000')
  })

  it('retrieves services from a natural question', () => {
    const results = retrieveKnowledge('What services do you offer?')

    expect(results.map((result) => result.title)).toEqual([
      'Simple Website',
      'Custom Website',
      'Business Automation / System'
    ])
  })

  it('retrieves project and technology details', () => {
    const results = retrieveKnowledge('What technologies were used for Ox Box?')

    expect(results[0]?.title).toBe('Ox Box')
    expect(results[0]?.content).toContain('Vue.js')
  })

  it('retrieves detailed ERP facts from the supplied résumé', () => {
    const results = retrieveKnowledge('How many monthly jobs does the ERP handle?')

    expect(results[0]?.title).toBe('Two Men And A Truck — ERP platform')
    expect(results[0]?.content).toContain('close to 400 booked jobs per month')
    expect(results[0]?.content).toContain('lean, agile team')
    expect(results[0]?.content).not.toContain('three-person agile team')
  })

  it('retrieves experience facts for common experience questions and misspellings', () => {
    for (const question of ['Is Kutlo experienced?', 'Is he experinced?', 'Is Kutlo expeirnced?']) {
      expect(retrieveKnowledge(question).map(({ title }) => title)).toContain(
        'Two Men And A Truck — ERP platform'
      )
    }

    expect(isExperienceDurationQuestion('How many years of experience does Kutlo have?')).toBe(true)
    expect(isExperienceDurationQuestion('What experience does Kutlo have?')).toBe(false)
  })

  it('retrieves Kutlo’s employer from a direct work question', () => {
    expect(retrieveKnowledge('Where does Kutlo work?').map(({ title }) => title)).toContain(
      'Two Men And A Truck — ERP platform'
    )
  })

  it('retrieves both roles for a work-history question', () => {
    const titles = retrieveKnowledge('What are Kutlo’s past roles?').map(({ title }) => title)

    const history = knowledge.find(({ title }) => title === 'Career and work history')
    expect(titles).toContain('Career and work history')
    expect(history?.content).toContain('TechPrime Project from February to July 2024')
    expect(history?.content).toContain('Two Men And A Truck South Africa and Ox Box')
  })

  it('uses the CV dates and skills for TechPrime and technical qualifications', () => {
    const techPrime = retrieveKnowledge('When was the TechPrime internship?')
    const skills = knowledge.find(({ title }) => title === 'Technical skills and working methods')
    const education = knowledge.find(({ title }) => title === 'Education and qualifications')

    expect(techPrime[0]?.content).toContain('February–July 2024')
    expect(skills?.content).toContain('PostgreSQL')
    expect(skills?.content).toContain('MySQL')
    expect(skills?.content).toContain('advanced prompt engineering')
    expect(education?.content).toContain('Computer Administration')
  })

  it('retrieves the supplied professional approach and interests', () => {
    const approach = retrieveKnowledge('What is Kutlo’s engineering philosophy?')
    const interests = retrieveKnowledge('What does Kutlo enjoy outside work?')

    expect(approach.map(({ title }) => title)).toContain('About Kutlo')
    expect(approach.map(({ title }) => title)).toContain('Engineering methods')
    expect(interests[0]?.title).toBe('Interests and personal growth')
    expect(interests[0]?.content).toContain('guitar')
    expect(interests[0]?.content).toContain('rugby')
  })

  it('finds Kutlo’s location when asked where he is from', () => {
    expect(retrieveKnowledge('Where are you from?').map(({ title }) => title)).toContain('About Kutlo')
  })

  it('retrieves specific payment and delivery achievements', () => {
    expect(retrieveKnowledge('How did payment automation reduce errors?').map(({ title }) => title))
      .toContain('Payments, invoicing, and job lifecycle')
    expect(retrieveKnowledge('How does the proof of delivery form work?').map(({ title }) => title))
      .toContain('Proof of delivery and internal tools')
  })

  it('does not include the home address or references in retrieved knowledge', () => {
    const allKnownFacts = JSON.stringify(knowledge)

    expect(allKnownFacts).not.toContain('Camp Road')
    expect(allKnownFacts).not.toContain('Maitland')
    expect(allKnownFacts).not.toContain('7405')
    expect(allKnownFacts).not.toContain('K Modiakgotla')
    expect(allKnownFacts).not.toContain('Christian Nyembo')
  })

  it('returns no context for details absent from the portfolio', () => {
    expect(retrieveKnowledge('What is Kutlo’s favourite movie?')).toEqual([])
  })

  it('recognizes greetings and casual small talk without matching unrelated questions', () => {
    expect(isSmallTalk('Hey!')).toBe(true)
    expect(isSmallTalk('yow')).toBe(true)
    expect(isSmallTalk('How are you?')).toBe(true)
    expect(isSmallTalk('wtf?')).toBe(true)
    expect(isSmallTalk('well take a wild guess')).toBe(true)
    expect(isSmallTalk('chat')).toBe(true)
    expect(isSmallTalk('What is the price?')).toBe(false)
    expect(isSmallTalk('What is the weather?')).toBe(false)
    expect(isAffirmativeReply('yes')).toBe(true)
    expect(isAffirmativeReply('sure!')).toBe(true)
    expect(isAffirmativeReply('yes, please')).toBe(false)
  })

  it('separates thanks, assistant questions, feedback, and missing Kutlo details', () => {
    expect(isThankYou('okay thank you')).toBe(true)
    expect(isThankYou('Thanks!')).toBe(true)
    expect(isAssistantQuestion('Are you harnessed?')).toBe(true)
    expect(isAssistantQuestion('Is this harnessing AI?')).toBe(true)
    expect(isAssistantFeedback("Why didn't you answer at first?")).toBe(true)
    expect(isAssistantFeedback('Why you didnt answer at first')).toBe(true)
    expect(isAssistantFeedback('Come on, not everhting is bad for fallback')).toBe(true)
    expect(isKutloDetailQuestion('How old is he?')).toBe(true)
    expect(isKutloDetailQuestion('How old is the weather?')).toBe(false)
    expect(isKutloDetailQuestion('What other roles has he had?')).toBe(true)
  })
})
