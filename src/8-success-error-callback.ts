type printResultFunction = (randomNumber : number) => void; 

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("If the number is above 50 , the console will print Error!")

const getRandomNumber = (randomNumber : number) => {
  

  setTimeout(() => {
    console.log(`Generating Number...`);
  }, 1000);

  setTimeout(() => {
    printResult(randomNumber);
  }, 2000);
  
}

const printResult : printResultFunction = (randomNumber) => {
  if (randomNumber > 50) {
    console.log(`The number ${randomNumber} is over 50!, Error!`)
  }

  else {
    console.log(`The number ${randomNumber} is under 50!, Success!`)
  }
}

getRandomNumber(randomNumber);