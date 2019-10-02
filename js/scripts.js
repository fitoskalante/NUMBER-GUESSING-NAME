let random = Math.floor((Math.random() * 100) + 1);
console.log(';random', random)

let history = [];

function guess() {

    let resultArea = document.getElementById("resultArea");
    let guessNumber = document.getElementById("myGuess").value;
    let historyCheck = document.getElementById("historyCheck");
    let text = ''
    if (history.includes(guessNumber)) {
        resultArea.innerHTML = "you have already said that number!";
        return;
    }
    if (history.length === 9) {
        text = "Game over!";
        history.push(guessNumber);
        document.getElementById("guessButton").disabled = true;
    } else if (guessNumber > random) {
        history.push(guessNumber);
        text = "this number is too big!";
    } else if (guessNumber < random) {
        history.push(guessNumber);
        text = "this number is too low!!";
    } else {
        resultArea.innerHTML = "this is correct!!";
    }
    resultArea.innerHTML = text
    historyCheck.innerHTML = history.join(', ')
    document.getElementById("myGuess").value = "";
}

function reset() {
    history = [];
    historyCheck.innerHTML = "";
    document.getElementById("myGuess").value = "";
    document.getElementById("guessButton").disabled = false;
    resultArea.innerHTML = "";
} 

