const nombre = 'Fernando'
const apellido = 'Herrera'

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

export function getGreeting(nombre = 'Goku') {
  return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getGreeting(nombre)}  `)
