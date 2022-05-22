import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0)
  const handleAddOne = () => {
    setCounter(counter + 1)
    // setCounter(counter => counter + 1) // This is the same as the previous one
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAddOne}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp

// rafcp -> Functional component snippet
