import * as readlineSync from 'readline-sync';

const getUsernameAndGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const playGame = (gameDescription, generateRound) => {
  const userName = getUsernameAndGreeting();
  console.log(gameDescription);

  const totalRounds = 3;

  for (let round = 0; round < totalRounds; round += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
