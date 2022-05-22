import { getHeroByIdAsync } from '../../base/09-promises'
import { heros } from '../../data/heros'

describe('09-promises', () => {
  test('getHeroByIdAsync shoud return a hero', done => {
    const id = 1

    getHeroByIdAsync(id).then(hero => {
      expect(hero).toBe(heros[0])
      done()
    })
  })
})
