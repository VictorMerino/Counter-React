import { createRoot } from 'react-dom/client'

const greeting = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root')

const root = createRoot(divRoot)
root.render(greeting)
