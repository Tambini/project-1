window.onload = function () {


  const apiUrl = 'https://api.tronalddump.io/random/quote';
  const button = document.querySelector("button")

  button.addEventListener("click", async function (evt) {
    evt.preventDefault();
    const result = await axios.get(`${apiUrl}`, {
      headers: { 'accept': 'application/hal+json' }
    })
    console.log(result)
  })
}

