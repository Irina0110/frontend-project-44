export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getRandomNumberInRange = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
