// Функция для запуска игры
export function runGame() {
  console.log("Welcome to the Brain Games!")
  const playerName = readlineSync.question("May I have your name? ")
  console.log(`Hello, ${playerName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const rounds = 3
  let correctAnswers = 0

  for (let i = 0; i < rounds; i++) {
    const randomNumber = generateRandomNumber()
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question("Your answer: ")

    const isEven = randomNumber % 2 === 0
    const correctAnswer = isEven ? "yes" : "no"

    if (userAnswer === correctAnswer) {
      console.log("Correct!")
      correctAnswers++
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${playerName}!`)
      return
    }
  }

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${playerName}!`)
  }
}
