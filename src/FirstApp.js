import PropTypes from 'prop-types'
const FirstApp = ({ greeting, subtitle }) => {
  const userName = 'Mader Faker'
  const object = {
    name: 'Name 1',
    surname: 'Shurmane',
  }

  return (
    <>
      <h1>Hola {userName}</h1>
      <p data-testid="greeting-paragraph">Saludo desde props: {greeting}</p>
      <p data-testid="subtitle">{subtitle}</p>
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </>
  )
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  subtitle: 'Default value',
}

export default FirstApp
