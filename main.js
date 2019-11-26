
window.onload = function () {

  // First I set up the api to verify I could use it  
  const apiUrl = 'https://api.tronalddump.io/random/quote';

  async function triggerApi() {
    //axios.get(URL, { headers: { Authorization: AuthStr } })
    const result = await axios.get(`${apiUrl}`, {
      headers: { 'accept': 'application/hal+json' }
    })

    return result.data.value
  }

  triggerApi();

  // I used the duck hunt excercise as a guide to build my page
  //Now i'm going to create the ballon to show up on the page
  function addBalloon() {
    const body = document.querySelector("body")
    const balloon = document.createElement("div")
    balloon.classList.add("balloon");
    body.appendChild(balloon);
    console.log(body)


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
    let balloons = document.querySelectorAll(".balloon");
    for (let i = 0; i < balloons.length; i++) {
      balloons[i].addEventListener("click", function () {
        this.classList.add("explode");
    
        // I need a way to trigger the API
        setTimeout(async function () {
        
          document.querySelector(".quote").innerHTML = await triggerApi();
        }, 500)

        // I need to add a way to remove the pop image  
        setTimeout(function () {
          document.querySelector(".explode").remove();
        }, 700)

        setTimeout(function () {
          winner();
        }, 1000)
      })

    }

  }
  pop();

  // I used the dots game to help me display the winners screen

  function winner() {
    let balloons = document.querySelectorAll(".balloon");
    let winnerScreen = document.querySelector(".winner-screen")
    if (balloons.length === 0) {
      winnerScreen.classList.add("next-level")
      console.log("ran winner function")
    }
    console.log(balloons.length)

  }

}