import PropTypes from 'prop-types'
const FirstApp = ({ greeting }) => {
  const userName = 'Mader Faker'
  const object = {
    name: 'Name 1',
    surname: 'Shurmane',
  }

  return (
    <>
      <h1>Hola {userName}</h1>
      <p>Saludo desde props: {greeting}</p>
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </>
  )
}

FirstApp.propTypes = {
  greeting: PropTypes.string,
}

export default FirstApp
