/* eslint-disable no-param-reassign */

import readlineSync from 'readline-sync';
import {
  getRandomNumber, getMinMaxRandNumber, generateProgression,
  findGCD, isPrimeNumber, getRandomOperation,
} from './utils.js';

export function runCalcGame() {
  const generateQuestion = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operation = getRandomOperation();
    let correctAnswer;

    switch (operation) {
      case '+':
        correctAnswer = (num1 + num2).toString();
        break;
      case '-':
        correctAnswer = (num1 - num2).toString();
        break;
      case '*':
        correctAnswer = (num1 * num2).toString();
        break;
      case '/':
        correctAnswer = (num1 / num2).toString();
        break;
      default:
        throw new Error(`Invalid operation: ${operation}`);
    }

    const question = `${num1} ${operation} ${num2}`;
    return [question, correctAnswer];
  };

  const name = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name? ',
  );

  console.log(`Hello, ${name}!\n`);

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`What is the result of the expression? \n Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function startGame() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  // Количество вопросов
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getMinMaxRandNumber(1, 100);
    const num2 = getMinMaxRandNumber(1, 100);
    const correctAnswer = findGCD(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
}

export function startProgressionGame() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { progression, hiddenNumber } = generateProgression();
    console.log(`Question: ${progression}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === hiddenNumber) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
}

export function startGamePrime() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const rounds = 3;

  let correctAnswers = 0;

  for (let i = 0; i < rounds; i++) {
    // Generate a random number from 2 to 50
    const randomNumber = getMinMaxRandNumber(2, 50);
    console.log(`Question: ${randomNumber}`);

    let userAnswer;
    while (true) {
      userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === 'yes' || userAnswer === 'no') {
        break; // Exit the loop if the user provides a valid answer.
      }
      console.log('Please enter "yes" or "no" as your answer.');
    }

    const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log(`${userAnswer} \n Correct!`);
      correctAnswers++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
    }
  }

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(
      `Congratulations, Tirion! You answered correctly to ${correctAnswers} questions out of ${rounds}. Let's try again, ${playerName}!`,
    );
  }
}

export function startEvenGame() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;
  let correctAnswers = 0;

  for (let i = 0; i < rounds; i++) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
