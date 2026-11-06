export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name: string
  email: string
  message: string
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = { name: '', email: '', message: '' }

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

export function isFormValid(errors: ContactFormErrors): boolean {
  return !errors.name && !errors.email && !errors.message
}
