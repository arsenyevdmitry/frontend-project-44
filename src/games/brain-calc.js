#!/usr/bin/env node

import { runGame } from "../cli.js"

// Генерация случайного числа в диапазоне
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// Генерация случайной операции (+, -, *)
const getRandomOperation = () => {
  const operations = ["+", "-", "*"]
  const randomIndex = getRandomNumber(0, operations.length - 1)
  return operations[randomIndex]
}

// Генерация вопроса и правильного ответа
const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const operation = getRandomOperation()

  const question = `${num1} ${operation} ${num2}`
  // eslint-disable-next-line no-eval
  const correctAnswer = eval(question).toString() // Вычисление правильного ответа

  return [question, correctAnswer]
}

// Запуск игры
runGame(
  "brain-calc",
  "What is the result of the expression?",
  generateQuestion,
  (question) => question[1]
)
