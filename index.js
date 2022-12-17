//  all the asynchronous functions will be executed only after the execution of Synchronous functions
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello 2");
}, 100);
console.log("Hello 3");

//callstack without Asynchronous Functions

const fName = () => console.log("Poorna");

const lName = () => console.log("Sri");

const printName = () => {
  console.log("My name is[synchronous]: ");
  fName();
  lName();
};

printName();

//callstack with Asynchronous Functions

const printNames = () => {
    console.log("My name is[Asynchronous]: ");
    setTimeout(fName, 0);
    lName();
}

printNames();