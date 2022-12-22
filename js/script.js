const firstNames = [
  "mostafa Ashraf",
  "mOSTAfa ashRAF",
  "mostaFA aSHRAF",
  "m0stafa ASHRAF",
  "MOstafa ASHraf",
  "m0--afa AS**^F",
  "MO^^#fa ARRRAf",
  "moSTAfa AshRaf",
  "mostaFA aSHRAF",
  "m0stafa ASHRAF",
  "m0stafa A$@%%f",
  "m0stafa &54HRAF",
  "m0&*af1 &4HRAF",
  "I SEE YOU",
  "404",
];

const secondNames = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () =>
  `${firstNames[getRandomNumber(firstNames.length)]} ${
    secondNames[getRandomNumber(secondNames.length)]
  }`;

const setRandomName = () => {
  document.getElementById("random-name").innerText = getRandomName();
};

document.getElementById("generate");

setRandomName();

setInterval(function () {
  setRandomName();
}, 1500 / 10);
