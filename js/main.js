// letters
const letters = "ابتثجحخدذرزسشصضطظيييعغفقكلمنهوى0123456789";

// get array from letters
let lettersArray = Array.from(letters);

// console.log(lettersArray)

// select letters container

let lettersContainer = document.querySelector(".letters");

// generate letters

lettersArray.forEach((letter) => {
  // careat span
  let span = document.createElement("span");
  // create letters text Node
  let theletters = document.createTextNode(letter);
  // append the letter to span
  span.appendChild(theletters);
  // add class on span
  span.className = "letter-box";
  // append span to the letters container
  lettersContainer.appendChild(span);
});

// Object of words + categories

const words = {
  "اسم شخص:.......": [
    "خالد",
    "محمد",
    "فاروق",
    "سكيكر",
    "الزيرو",
    "محمد صلاح",
    "احمد",
  ],
  " اسم نادى مصرى:....... ": ["الاهلى", "الزمالك", "المحله"],
  "مشاهير كرة القدم:....... ": [, "محمد صلاح", "ميسي", "كريستيانو"],
  "دولــه:.......": ["مصر", "امريكا", "فلسطين", "الامارات", "سوريا", "فرنسا"],
  "تاريخ ميلاى :.......": ["72 11 0002"],
};
// get random property
let allkays = Object.keys(words);
// console.log(allkays);

// random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allkays.length);
// console.log(randomPropNumber)

// category
let randomPropName = allkays[randomPropNumber];

// console.log(randomPropName);

// category words
let randomPropValue = words[randomPropName];
// console.log(randomPropValue)

// random number depend on words length
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// console.log(randomValueNumber);

// the ch osen words
let randomValueValue = randomPropValue[randomValueNumber];
// console.log(randomValueValue);

// set categroy info
document.querySelector(".game-info .category span").innerHTML = randomPropName;
console.log(randomValueValue);
// select letters guess element
let letterGuessContainer = document.querySelector(".letters-guess");

// covert chosen word to Array
let letterAndSpace = Array.from(randomValueValue);

// console.log(letterAndSpace)

// creat spans Depened on word

letterAndSpace.forEach((letter) => {
  // create Empty span
  let emptySpan = document.createElement("span");
  // if letter is space
  if (letter === " ") {
    // add class to the
    emptySpan.className = "with-space";
  }
  // append span to the guess container
  letterGuessContainer.appendChild(emptySpan);
});

// hand clicking on letters

// select guess span
let guessSpan = document.querySelectorAll(".letters-guess span");
// console.log(guessSpan.length);
// console.log(guessSpan.length);

// set wrong attempts
let wrongattempts = 0;

// set  wrong attempts
let theDraw = document.querySelector(".hangman-draw");
let theChosenword = Array.from(randomValueValue.toLowerCase());

document.addEventListener("click", (e) => {
  // set the chose status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // get clicked letter

    let theclickedletter = e.target.innerHTML.toLowerCase();

    // the  chossen word
      console.log(theChosenword);
    // console.log(theclickedletter) // console.log(letterAndSpace)
    theChosenword.forEach((wordLetter, wordindex) => {
      // if the clicked letter egual to one of the chosen word

      if (theclickedletter == wordLetter) {
        // set status to correct
        theStatus = true;
        // loop on all guess span
        console.log(theclickedletter);

        guessSpan.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theclickedletter;
            let man = Array.from(spanIndex);
            console.log(man)
          }
        });
      }
    });
        // console.log(theclickedletter);
    if (theStatus !== true) {
      // outside loop
      // console.log(theStatus);
      // increase the wrong attempts
      wrongattempts++;

      // add class wrong no the drow Element
      theDraw.classList.add(`wrong-${wrongattempts}`);

      // play fail sound
      document.getElementById("fail").play();

      if (wrongattempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    } else {
      // endGame()
      // play success sound
      document.getElementById("success").play();
    }
  }
});
// console.log(theChosenword);
// end gema
function endGame() {
  // creat popup div
  let div = document.createElement("div");
  // creat text
  let divText = document.createTextNode(
    ` لقد خسرت اللعبه يافاشل الكلم هى  ( ${randomValueValue} )`
  );

  // append
  div.appendChild(divText);

  // add class on div
  div.className = "popup";
  document.body.appendChild(div);
}
