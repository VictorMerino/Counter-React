import { returnArray } from '../../base/07-deses-arr'

describe('07-deses-arr', () => {
  test('returnArray should return a string and a number', () => {
    const expectedArray = ['ABC', 123]
    const [firstReturnedValue, secondReturnedValue] = returnArray()

    expect(firstReturnedValue).toStrictEqual(expectedArray[0])
    expect(secondReturnedValue).toStrictEqual(expectedArray[1])
  })
})
