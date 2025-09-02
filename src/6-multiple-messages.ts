type printMessagesFunction = (message : string , index : number)  => void;

const multipleMessages = (
  msg1 : printMessagesFunction, 
  msg2 : printMessagesFunction, 
  msg3 : printMessagesFunction) => {
    msg1("hello!" , 1);
    msg2("hello world!" ,2 );
    msg3("hi!" , 3);
  
}

const printMessages = (message: string , index : number) => {
    console.log(`Here is message ${index} : ${message}!`)  
  }

multipleMessages(printMessages , printMessages , printMessages);