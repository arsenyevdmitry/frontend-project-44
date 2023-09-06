#!/usr/bin/env node

import { getRandomNumber } from "../utils.js"
import { runGame } from "../index.js"

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no"'

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50)
  const correctAnswer = isPrimeNumber(question) ? "yes" : "no"

  return [question, correctAnswer]
}

export default () => {
  runGame(description, getQuestionAndAnswer)
}
