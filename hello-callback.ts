const waitForHello = () => {
  console.log("Waiting for hello!");
  setTimeout(() => {
    const Message = "Hello from callback!"
  }, 2000);
}

waitForHello();