const choices = ["rock", "paper", "scissors"];

let score = parseInt(document.getElementsByClassName('score')[0].outerText);

const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const botChoice = getRandomChoice();

const userSelection = (choice) => {
  if (choice === botChoice) {
    console.log("It's a tie!");
  } else if (
    (choice === "rock" && botChoice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper")
  ) {
    console.log("You win!");
    score += 1;  
    document.getElementsByClassName('score')[0].innerText = score;
  } else {
    console.log("You lose!");
  }
}
