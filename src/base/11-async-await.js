// const getImagePromise = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagePromise().then( console.log );

export const getImage = async () => {
  try {
    const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`
    )
    const { data } = await resp.json()

    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
    return url
  } catch (error) {
    // manejo del error
    // console.error(error)
    return error
  }
}

getImage()
