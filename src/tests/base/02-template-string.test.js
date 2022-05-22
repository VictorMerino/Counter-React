import { getSaludo } from '../../base/02-template-string'

describe('02-template-string', () => {
  const username = 'Onofre'
  const defaultUsername = 'Goku'
  test(`getSaludo should return Hola ${username}`, () => {
    expect(getSaludo(username)).toBe(`Hola ${username}`)
  })
  test(`getSaludo should return Hola ${defaultUsername}`, () => {
    expect(getSaludo()).toBe(`Hola ${defaultUsername}`)
  })
})
