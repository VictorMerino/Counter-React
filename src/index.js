import { createRoot } from 'react-dom/client'
import FirstApp from './FirstApp'

import './index.css'
const divRoot = document.querySelector('#root')

const root = createRoot(divRoot)
root.render(<FirstApp greeting="Hola, soy Alfred (from props)" />)
