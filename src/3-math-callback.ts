const additionMath = (a : number , b : number) => {
  const result = a + b;
  console.log("Calculating...")
  setTimeout(() => {
    console.log(`a + b = ${result}`)
  }, 2000)
}

additionMath(22 , 31);