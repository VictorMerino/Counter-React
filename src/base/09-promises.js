import { getheroById } from './08-imp-exp'

export const getheroByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el
      const p1 = getheroById(id)
      if (p1) {
        resolve(p1)
      } else {
        reject('Hero not found')
      }
    }, 1500)
  })
}
