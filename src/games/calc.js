import playGame from '../index.js';
import { getRandomNumberInRange } from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const generateExpression = () => {
  const num1 = getRandomNumberInRange(1, 50);
  const num2 = getRandomNumberInRange(1, 50);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumberInRange(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;

  const calculate = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
  };

  const correctAnswer = calculate[operator];

  return [question, String(correctAnswer)];
};

export default () => playGame(gameDescription, generateExpression);
