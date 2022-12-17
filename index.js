

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

// Closures in JavaScript
function generateGreetings(name) {
    function spanish() {
      console.log(`Hola ${name}!`);
    }
    function english() {
      console.log(`Hello ${name}!`);
    }
    return {spanish, english};
  };
  
  const name = 'John';
  const greetings = generateGreetings(name);
  console.log(typeof(greetings.spanish));
  
  greetings.spanish(); 
  greetings.english(); 