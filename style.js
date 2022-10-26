function myFunction() {
  myFunctionOne();
  myFunctionTwo();
  myFunctionThree();
}

function myFunctionOne() {
  document.documentElement.style.cssText = "--bg-primary-one: red";
}

function myFunctionTwo() {
  document.documentElement.style.cssText = "--bg-primary-two: white";
}

function myFunctionThree() {
  document.documentElement.style.cssText = "--text-accent-three: green";
}
