import { getHeroeById } from '../../base/08-imp-exp'
import { heroes } from '../../data/heroes'

describe('08-imp-exp', () => {
  test('getHeroeById should return a hero', () => {
    const expectedHero = {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    }
    const returnedHero = getHeroeById(2)

    const heroData = heroes

    expect(returnedHero).toStrictEqual(expectedHero)
  })

  test('getHeroeById should return undefined if no hero', () => {
    const returnedHero = getHeroeById(12) // 12 is out of bounds

    const heroData = heroes

    expect(returnedHero).toBeUndefined()
  })
})
