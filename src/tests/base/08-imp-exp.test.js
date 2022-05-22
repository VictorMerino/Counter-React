import { getHeroById, getHerosByOwner } from '../../base/08-imp-exp'
import { heroes } from '../../data/heroes'

describe('08-imp-exp', () => {
  const heroData = heroes

  test('getHeroeById should return a hero', () => {
    const expectedHero = {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    }
    const returnedHero = getHeroById(2)

    expect(returnedHero).toStrictEqual(expectedHero)
  })

  test('getHeroeById should return undefined if no hero', () => {
    const returnedHero = getHeroById(12) // 12 is out of bounds

    expect(returnedHero).toBeUndefined()
  })

  test('getHeroesByOwner should return an array with DC heros', () => {
    const returnedHero = getHerosByOwner('DC')

    expect(returnedHero).toBeUndefined()
  })
})
