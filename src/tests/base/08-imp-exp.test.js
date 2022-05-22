import { getHeroById, getHerosByOwner } from '../../base/08-imp-exp'
import { heros } from '../../data/heros'

describe('08-imp-exp', () => {
  const heroData = heros

  test('getheroById should return a hero', () => {
    const expectedHero = {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    }
    const returnedHero = getHeroById(2)

    expect(returnedHero).toStrictEqual(expectedHero)
  })

  test('getheroById should return undefined if no hero', () => {
    const returnedHero = getHeroById(12) // 12 is out of bounds

    expect(returnedHero).toBeUndefined()
  })

  test('getherosByOwner should return an array with DC heros', () => {
    const expectedOwner = 'DC'
    const returnedHero = getHerosByOwner(expectedOwner)

    expect(returnedHero.length).toEqual(3)
    expect(returnedHero).toStrictEqual(
      heroData.filter(hero => hero.owner === expectedOwner)
    )
  })
})
