import readlineSync from "readline-sync"

// Общая логика игр
export default function runGame(
  gameName,
  gameDescription,
  generateQuestion,
  getCorrectAnswer
) {
  console.log(`${gameName}\n`)
  const name = readlineSync.question(
    "Welcome to the Brain Games!\nMay I have your name? "
  )
  console.log(`Hello, ${name}!\n${gameDescription}`)

  let correctAnswers = 0
  while (correctAnswers < 3) {
    const [question, correctAnswer] = generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question("Your answer: ")

    if (userAnswer === correctAnswer) {
      console.log("Correct!")
      correctAnswers += 1
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
