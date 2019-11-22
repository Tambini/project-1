window.onload = function () {


  const apiUrl = 'https://api.tronalddump.io/random/quote';
  const apiHeader = 'accept: application/hal+json'
  const button = document.querySelector("button")

  button.addEventListener("click", async function (evt) {
    evt.preventDefault();
    const result = await axios.get(`${apiUrl}${apiHeader}`)
    console.log(result)
  })
}


