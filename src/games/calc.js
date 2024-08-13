import playGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateExpression = () => {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    let question;
    let correctAnswer;

    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        default:
            break;
    }

    return [question, String(correctAnswer)];
};

const gameDescription = 'What is the result of the expression?';

const calcGame = () => playGame(gameDescription, generateExpression);

export default calcGame;