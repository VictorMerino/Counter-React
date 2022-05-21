import { createRoot } from 'react-dom/client'
import FirstApp from './FirstApp'

const divRoot = document.querySelector('#root')

const root = createRoot(divRoot)
root.render(<FirstApp />)
