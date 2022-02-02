//tutorial stuff

let x = myFunc(4, 3);
// myFunc is called with two parameters, the return value will end up in x

function myFunc(a, b) {
  return a + b;
// myFunc returns the sum of a and b
}
console.log(x);
//Will give an output of 12.

function add(a,b) {
    return a+b;
}
add(10,12);
// Will give out of 22

add
// Will return function add (a,b){return a+b;}

let myStr = "The sum of 10 + 12 is " + add(10,12);
console.log(myStr);
//Output is "The sum of 10 + 12 is 22"

const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  // Output is 12

  sayHi("John"); // Hello, John
function sayHi(name) {
  //alert( `Hello, ${name}` ); //alert is a pop up
  console.log( `Hello, ${name}` );
}

hello = (name, age) => console.log("Hello " + name +"! you are "+ age +" years old!");

hello("jon",25);

//exercise 7
function sub (num1,num2)
{
    return num1 - num2;
}
console.log(sub(2,2));

function welcome (name,age,gender)
{
    console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`)
}
welcome ("Jon",25,"Male");

powerup = (n1,n2) => console.log(Math.pow(n1,n2));

powerup(3,3);