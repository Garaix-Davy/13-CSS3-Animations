// adding event listeners to the div containing the sun
var system = document.getElementById("system");
system.addEventListener("click", myAnimation);
system.addEventListener("animationend", resetClass);

// getting the sun element
var sun1 = document.getElementById("sun1");
var sun2 = document.getElementById("sun2");

// defining a list of possible animations
var animationList = ["grow","move"];

function myAnimation() {
    // selecting an animation at random
    var chosenAnimation = getRandomInt (0,animationList.length-1);

    // adds an animation class to the sun
    system.style.webkitAnimationPlayState = 'paused';
    sun1.className = animationList[chosenAnimation];
    sun2.className = animationList[chosenAnimation];

  }

function resetClass() {
  // removes an animation class to the sun so that we can trigger events again
  sun1.className = "";
  sun2.className = "";
  system.style.webkitAnimationPlayState = 'running';
}

// function to get a random number
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
