
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

  // //Now i'm going to create the ballon to show up on the page


  // function addBalloon() {
  //   const balloon = document.createElement("div");
  //   balloon.classList.add("balloon");
  //   const body = document.querySelector("body")
  //   body.appendChild(balloon);
  //   console.log(body)
  // }
  // addBalloon()

  // // now I will make the balloon move on the page on refresh

  // // function moveBalloon() {
  // //   const balloon = document.querySelector(".balloon");
  // //   // balloon.style.bottom = Math.random() * window.innerWidth + "px";
  // //   balloon.style.left = Math.random() * window.innerHeight + "px";
  // //   balloon.style.top = Math.random() * window.innerHeight + "px";
  // // }
  // // moveBalloon()

  // // now I need to make the balloon move all over the page without
  // // having to hit refresh

  // function moveBalloonObject() {
  //   const balloon = document.querySelector(".balloon");
  //   // obj.style.bottom = Math.random() * window.innerWidth + "px";
  //   balloon.style.left = Math.random() * window.innerHeight + "px";
  //   balloon.style.top = Math.random() * window.innerHeight + "px";
  // };

  // setInterval(function () {
  //   moveBalloonObject(document.querySelector(".balloon"));
  // }, 2000);

  // function multipleBalloons(number) {
  //   for (let i = 0; i < number; i++) {
  //     // const balloon = document.querySelector(".balloon")
  //     const balloon = addBalloon();
  //     // moveBalloon(balloon);
  //     moveBalloonObject(balloon);
  //     setInterval(function () {
  //       moveBalloonObject(document.querySelector(".balloon"));
  //     }, 2000);
  //   }
  // }

  // multipleBalloons(5);



  // I have to create a function that does steps 1-4 

  function createBalloon() {
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

  createBalloon()


  // /* now I will create a function that creates more than one balloon */

  function multipleBalloons(number) {
    for (let i = 0; i < number; i++) {
      createBalloon()
    }
  }
  multipleBalloons(5)






}


















