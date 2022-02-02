let car = new Object();
car["make"] = "Audi";
car["model"] = "A5";
car["carReg"] = "W8M8";

console.log(car) // shows all attributes
console.log(car.make); //show the value of make
console.log(car.model); //show the value of model
console.log(car.carReg); //show the value of carReg
console.log("test")

car.numberOfDoors = 4;

//a lot simpler and quicker to declare objects

//let car = { make: "Audi", model: "A5", carReg: "W8M8" };

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]
console.log(carPark);

//How to create arrays
let a = Array(); // an empty array called a
let b = Array(10); //array containing 10 empty spaces called b
let c = Array("Tom","Dick","Harry"); // array containing 3 elements called c
// short hand for creating arrays
let cShortHand = ["Tom","Dick","Harry"]; //shorthand using [] around each elment and seperated by a comma.
let d = [1,2,3,4,5];

let classRoom = ["","","",""];
classRoom[0] = "John";
classRoom[3] = "Simran";

console.log(classRoom[0]); // will return John
console.log(classRoom[2]); // will return undefined
console.log(classRoom[3]); // will return Simran.

let d1 =["apple","strawberries","banana", "grapes", "pear"];

console.log(d1); // ["apple", "strawberries", "banana", "grapes", "pear"]
console.log(d1.sort()); // ["apple", "banana", "grapes", "pear", "strawberries"]
console.log(d1.reverse());//["strawberries", "pear", "grapes", "banana", "apple"]
console.log(d1.join()); //strawberries,pear,grapes,banana,apple

e = d1.join("-");
console.log(e);// strawberries-pear-grapes-banana-apple

//push()	adds a new element to the end of the arrays
//pop()	removes the last element from the end of the arrays
    console.log(d1.push("lemon"));
    console.log(d1);//["strawberries", "pear", "grapes", "banana", "apple", "lemon"]
    console.log(d1.pop());
    console.log(d1);//["strawberries", "pear", "grapes", "banana", "apple"]

//unshift()	adds a new element to the beginning of the arrays
//shift()	remove the first element from the beginning of the array
    console.log(d1.unshift("kiwi"));
    console.log(d1); //["kiwi", "strawberries", "pear", "grapes", "banana", "apple"]
    console.log(d1.shift());
    console.log(d1); //["strawberries", "pear", "grapes", "banana", "apple"]

    let myArray = [1,2,3,4]; //declare an array
//create a temp variable called "eachElement"
//iterate though "myArray" starting at index 0
//finally log the value of "eachElement"
for (let eachElement of myArray) {
    console.log(eachElement);
}

let myJSONObject = {
    "searchResults": [
        {
            "productName": "Aniseed Syrup",
            "unitPrice": 10
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};

//The parse method takes a string and parses it into JavaScript objects
let obj = JSON.parse('{"name":"Adrian"}');
console.log(obj.name); //returns Adrian
//The stringify method takes JavaScript objects and returns a string
let str = JSON.stringify({ name: "John" });