// Функция для генерации случайного числа
export function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
// Функция для генерации случайного числа в диапазоне
export function getMinMaxRandNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для создания арифметической прогрессии
export function generateProgression() {
  // Случайная длина прогрессии от 5 до 10 чисел
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  // Случайное начальное число от 1 до 50
  const firstNumber = Math.floor(Math.random() * 50) + 1;
  // Случайная разница между числами от 1 до 10
  const commonDifference = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  for (let i = 0; i < progressionLength; i++) {
    progression.push(firstNumber + i * commonDifference);
  }

  // Выбираем случайную позицию для замены числа двумя точками
  const hiddenNumberIndex = Math.floor(Math.random() * progressionLength);
  progression[hiddenNumberIndex] = '..';

  return {
    progression: progression.join(' '),
    hiddenNumber: firstNumber + hiddenNumberIndex * commonDifference,
  };
}

// Функция для нахождения НОД двух чисел
export function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Функция для определения, является ли число простым
export function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  return num % 2 === 0;
}

export function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

export function getRandomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = getMinMaxRandNumber(0, operations.length - 1);
  return operations[randomIndex];
}
