import { getActiveUser } from '../../base/05-funciones'

describe('05-funciones', () => {
  it('getActiveUser should return the expected active user', () => {
    const expectedActiveUser = {
      uid: 'ABC567',
      username: 'El Chaladero',
    }

    const activeUser = getActiveUser('El Chaladero')
    expect(activeUser).toStrictEqual(expectedActiveUser)
  })
})
