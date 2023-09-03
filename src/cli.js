import readlineSync from "readline-sync"

// Общая логика игр
export function runGame(
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

export function greetUser() {
  console.log("Welcome to the Brain Games!")
  const name = readlineSync.question("May I have your name? ")
  console.log(`Hello, ${name}!`)
}

export function playGame() {
  console.log("Welcome to the Even Games!")
  const name = readlineSync.question("May I have your name? ")
  console.log(`Hello, ${name}!`)

  // game loop
  let correctAnswers = 0
  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100)

    console.log(
      `I challenge you with this number, guess is it Even? \n Number: ${randomNumber}`
    )

    const userInput = readlineSync.question("Enter answer Yes/No: ")
    let userAnswer = "none"

    if (userInput.toLowerCase() === "yes") {
      userAnswer = "even"
    }
    if (userInput.toLowerCase() === "no") {
      userAnswer = "odd"
    }

    const isEven = randomNumber % 2 === 0
    console.log(userAnswer)
    if (userAnswer === "none") {
      console.log("You are bustard and looser. Play again")
      break
    }

    if (isEven && userAnswer === "even") {
      console.log(
        `My number ${randomNumber} is even, you answered ${userAnswer} and it's correct`
      )
      correctAnswers++
    }

    if (!isEven && userAnswer === "odd") {
      console.log(
        `My number ${randomNumber} is odd, you answered ${userAnswer} and it's correct`
      )
      correctAnswers++
    } else {
      console.log("You are bustard and looser. Play again")
      break
    }
  }
}

// Функция для нахождения НОД двух чисел
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

// Функция для генерации случайного числа в диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Функция для запуска игры
export function startGame() {
  console.log("Welcome to the Brain Games!")
  const playerName = readlineSync.question("May I have your name? ")
  console.log(`Hello, ${playerName}!`)
  console.log("Find the greatest common divisor of given numbers.")

  // Количество вопросов
  const rounds = 3

  for (let i = 0; i < rounds; i++) {
    const num1 = getRandomNumber(1, 100)
    const num2 = getRandomNumber(1, 100)
    const correctAnswer = findGCD(num1, num2)

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = readlineSync.question("Your answer: ")

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log("Correct!")
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${playerName}!`)
      return
    }
  }

  console.log(`Congratulations, ${playerName}!`)
}
