import { getHeroByIdAsync } from '../../base/09-promises'

describe('09-promises', () => {
  test('getHeroByIdAsync shoud return a hero', done => {
    const id = 1

    getHeroByIdAsync(id).then(hero => {
      expect(true).toBe(false)
      done()
    })
  })
})
