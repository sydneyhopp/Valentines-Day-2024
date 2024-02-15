const noButtonPhrases = [
    "you pressed the wrong button",
    "do you hate me?????????????",
    "who do you think you are ong",
    "HELLOOOOO",
    "please",
    "pretty pls",
    "por favor",
    "eat deez bit fa-"
];

let numberOfTimesClicked = 0;

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const gif = document.getElementById("gif-container");
const mainText = document.getElementById("main-text");

noButton.addEventListener("click", () => {
    numberOfTimesClicked++;
    if (numberOfTimesClicked >= noButtonPhrases.length) {
        numberOfTimesClicked = 0;
    }
    noButton.textContent = noButtonPhrases[numberOfTimesClicked];
    yesButton.style.fontSize = `${numberOfTimesClicked * 15 + 20}px`;
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute'; // set position to absolute
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", ()=> {
    yesButton.style.display = "none";
    noButton.style.display = "none";
    gif.src = "https://media1.tenor.com/m/pZiEFB4vwXsAAAAC/cat-funny.gif";
    mainText.textContent = "yeahhhhh that's right";

});

