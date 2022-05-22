import { getActiveUser } from '../../base/05-funciones'

describe('05-funciones', () => {
  it('should return the correct active user', () => {
    const user = {
      uid: 'ABC567',
      username: 'El Chaladero',
    }

    const activeUser = getActiveUser('El Chaladero')
    expect(activeUser).toStrictEqual(user)
  })
})
