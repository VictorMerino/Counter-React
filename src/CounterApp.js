import { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)
  const handleAddOne = () => {
    setCounter(counter + 1)
    // setCounter(counter => counter + 1) // This is the same as the previous one
  }
  const handleSubstractOne = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(value)
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid="result">{counter}</h2>

      <button onClick={handleSubstractOne} data-testid="substract">
        - 1
      </button>
      <button onClick={handleReset} data-testid="reset">
        Reset
      </button>
      <button onClick={handleAddOne} data-testid="add">
        + 1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp

// rafcp -> Functional component snippet
