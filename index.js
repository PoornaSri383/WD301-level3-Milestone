//  all the asynchronous functions will be executed only after the execution of Synchronous functions
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello 2");
}, 100);
console.log("Hello 3");
