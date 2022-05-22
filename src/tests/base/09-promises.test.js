import { getHeroByIdAsync } from '../../base/09-promises'
import { heros } from '../../data/heros'

describe('09-promises', () => {
  test('getHeroByIdAsync should return a hero', done => {
    const id = 1

    getHeroByIdAsync(id).then(hero => {
      expect(hero).toBe(heros[0])
      done()
    })
  })

  test('getHeroByIdAsync should return an error if id does not exists', done => {
    const id = 13

    getHeroByIdAsync(id).catch(error => {
      expect(error).toContain('not found')
      done()
    })
    // expect(getHeroByIdAsync(id)).toThrowError()
  })
})
