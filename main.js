
window.onload = function () {

  // First I set up the api to verify I could use it  

  // const apiUrl = 'https://api.tronalddump.io/random/quote';
  // const button = document.querySelector("button")

  // button.addEventListener("click", async function (evt) {
  //   evt.preventDefault();
  //   const result = await axios.get(`${apiUrl}`, {
  //     headers: { 'accept': 'application/hal+json' }
  //   })
  //   console.log(result)
  // })

  //Now i'm going to create the ballon to show up on the page


  function addBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    const body = document.querySelector("body")
    body.appendChild(balloon);
    console.log(body)
  }
  addBalloon()

  function moveballoon() {
    const balloon = document.querySelector(".balloon");
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.top = Math.random() * window.innerHeight + "px";
  }

  moveballoon()


}

