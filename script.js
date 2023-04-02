const btnsDrum = document.querySelectorAll(".drum");

for (let btnDrum of btnsDrum) {
  btnDrum.addEventListener("click", function () {
    // console.log(this.innerHTML);
    // this.style.color = "white";
    // drumSound.play();
    // alert("Kliknuls");
    let btnDrumInnerHTML = this.innerHTML;
    playSoundByLetter(btnDrumInnerHTML);
    btnAnimation(btnDrumInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playSoundByLetter(event.key);
<<<<<<< HEAD
});

/**
 * Přehraje audio podle písmene v parametru
 * @param {*} letter
 */
function playSoundByLetter(letter) {
  switch (letter) {
=======
  btnAnimation(event.key);
});

function playSoundByLetter(currentLetter) {
  switch (currentLetter) {
>>>>>>> developement
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");

      tom4.play();
      break;

    default:
      const defaultSound = new Audio("sounds/crash.mp3");
      defaultSound.play();
      break;
  }
}

function btnAnimation(currentLetter) {
  const activeBtn = document.querySelector(`.${currentLetter}`);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 300);
}
