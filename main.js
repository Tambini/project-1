
window.onload = function () {

  // First I set up the api to verify I could use it  

  const apiUrl = 'https://api.tronalddump.io/random/quote';
  const button = document.querySelector("button")



  // I used the duck hunt excercise as a guide to build my page
  //Now i'm going to create the ballon to show up on the page

  function addBalloon() {
    const body = document.querySelector("body")
    const balloon = document.createElement("div")
    balloon.classList.add("balloon");
    body.appendChild(balloon);
    console.log(body);

    function randomPosition() {
      balloon.style.left = Math.random() * window.innerWidth + "px";
      balloon.style.top = Math.random() * window.innerHeight + "px";
    }

    randomPosition()

    setInterval(randomPosition, 2000);

    return balloon;

  }

  addBalloon()


  // /* now I will create a function that creates more than one balloon */

  function multipleBalloons(number) {
    for (let i = 0; i < number; i++) {
      addBalloon()
    }
  }
  multipleBalloons(10)


  // now I have to add an event handler so when you click on the click event handler you 

  function pop() {
    let balloons = document.querySelectorAll(".balloon")
    for (let i = 0; i < balloons.length; i++) {
      balloons[i].addEventListener("click", function () {
        this.classList.add("explode");
        console.log("clicked")
      })
    }

  }
  pop();

 // balloons.addEventListener("click", async function (evt) {
    //   evt.preventDefault();
    //   const result = await axios.get(`${apiUrl}`, {
    //     headers: { 'accept': 'application/hal+json' }
    //   })
    //   console.log(result)
    // })





}


















