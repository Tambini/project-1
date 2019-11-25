
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

  // now I will make the balloon move on the page on refresh

  function moveballoon() {
    const balloon = document.querySelector(".balloon");
    // balloon.style.bottom = Math.random() * window.innerWidth + "px";
    balloon.style.left = Math.random() * window.innerHeight + "px";
    balloon.style.top = Math.random() * window.innerHeight + "px";
  }
  moveballoon()

  // now I need to make the balloon move all over the page without
  // having to hit refresh
  const moveBalloonObject = obj => {
    // obj.style.bottom = Math.random() * window.innerWidth + "px";
    obj.style.left = Math.random() * window.innerHeight + "px";
    obj.style.top = Math.random() * window.innerHeight + "px";
  };

  setInterval(function () {
    moveBalloonObject(document.querySelector(".balloon"));
  }, 250);

  moveballoon()
}



