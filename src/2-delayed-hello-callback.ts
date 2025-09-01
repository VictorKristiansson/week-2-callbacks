type delayedMessageFunction = (delayedMessage : string) => void;

const delayedHello = (delayedMessage : delayedMessageFunction) => {
  console.log("Delayed hello...");
  setTimeout(() => {
    const delayedMessage = "Hi, I am late!";
    sayHelloLater(delayedMessage);
  }, 2000)
  
}

const sayHelloLater = (delayedMessage : string) => {
  console.log(delayedMessage)
}

delayedHello(sayHelloLater);