const stringUppercase = () => {
  
  const stringBeforeUppercase : string = "Hello World!"
  
  console.log(`Your string before uppercase : ${stringBeforeUppercase}`);
  
  const stringAfterUppercase : string = stringBeforeUppercase.toUpperCase();

  setTimeout(() : void => {
    console.log(`Working on it...`);
    setTimeout(() : void => {
      console.log(`Your string in uppercase! : ${stringAfterUppercase}`);
    }, 1000);
  }, 3000);

  
}

stringUppercase();