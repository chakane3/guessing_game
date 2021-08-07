const readlineSync = require("readline-sync")

const play = () => {
  console.log("Thank you for playing the ultimate guessing game.")
  console.log("Let's start with you picking a number between 1 and 10,000")
  console.log("If I guess your number in 15 guesses or less I win")
  console.log("If I don't, you win")
  console.log("With each guess you have to tell me if I am too high or too low")

  // requires user to type Y or N
  if (readlineSync.keyInYN("Sound Good?")) {
    startGame()
  } else {
    leaveGame()
  }
}

const startGame = () => {}

const leaveGame = () => {
  console.log("That's too bad :-( Good luck in life!")
  process.exit()
}

play()

