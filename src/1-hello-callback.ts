type helloMessageFunction = (Message: string) => void;

const waitForHello = (helloMessage: helloMessageFunction): void => {
  console.log("Waiting for hello!");
  const Message: string = "Hello from callback!";
  helloMessage(Message);
}

const helloMessage = (Message: string): void =>  {
  console.log(Message);
}

waitForHello(helloMessage);
