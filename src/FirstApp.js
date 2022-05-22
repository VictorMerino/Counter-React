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

export default FirstApp
