import { getheroById } from './bases/08-imp-exp'

// const promise = new Promise( (resolve, reject) => {

//     setTimeout( () =>  {
//         // Tarea
//         // importen el
//         const p1 = getheroById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )

// });

// promise.then( (hero) => {
//     console.log('hero', hero)
// })
// .catch( err => console.warn( err ) );

const getheroByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el
      const p1 = getheroById(id)
      if (p1) {
        resolve(p1)
      } else {
        reject('No se pudo encontrar el héroe')
      }
    }, 2000)
  })
}

getheroByIdAsync(1).then(console.log).catch(console.warn)
