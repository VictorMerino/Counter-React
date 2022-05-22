import { getImage } from '../../base/11-async-await'

describe('11-async/await', () => {
  test('should return image url', async () => {
    const imgUrl = await getImage()
    expect(typeof imgUrl).toBe('string')
    expect(imgUrl).toContain('https')
  })
})
