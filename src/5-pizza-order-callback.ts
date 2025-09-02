type waitingForPizzaFunction = (message : string)  => void;

const orderPizza = (waitingForPizza: waitingForPizzaFunction) => {
  console.log("Ordering Pizza!");
  waitingForPizza("The Pizza is ready!");
}

const waitingForPizza = (message : string) : void => {
    setTimeout(() : void =>  {
      console.log(message)
    }, 3000);
}


orderPizza(waitingForPizza);