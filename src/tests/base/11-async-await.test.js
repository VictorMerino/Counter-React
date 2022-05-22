import { getImage } from '../../base/11-async-await'

describe('11-async/await', () => {
  test('should return image url', async () => {
    expect(typeof (await getImage())).toBe('string')
  })
})
