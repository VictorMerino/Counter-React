import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const addOne = () => {
    console.log('addOne called')
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

      <button onClick={addOne}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp

// rafcp -> Functional component snippet
