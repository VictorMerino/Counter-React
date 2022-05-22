const FirstApp = () => {
  const userName = 'Mader Faker'
  const object = {
    name: 'Name 1',
    surname: 'Shurmane',
  }
  return (
    <>
      <h1>Hola {userName}</h1>
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </>
  )
}

export default FirstApp
