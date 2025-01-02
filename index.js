//practice Basic to Advance 

console.log("hello , world");
let name = "Tarun";
let age = 7755;
const isStudent = true;

console.log("name is :", name);
console.log("age is :", age);
console.log("isStudent :", isStudent)


// basic arithmatic operations

let a = 12;
let b = 3;
console.log("Addition", a+b);
console.log("substracton", a-b);
console.log("multiplication", a*b);
console.log("devision", a/b);
console.log("modulo", a%b);


//consitional Statement
let num = -3;
if(num > 0) {
    console.log("positive number");
} else if(num < 0){
    console.log("negative number");
}else {
    console.log("number is zero");
}
    
    
    
//loops
for(let i=1; i<=10; i++){
    console.log(i);
}

//Functions
function square(num) {
    return num * num;
}
console.log(square(4));


let fruits = ["Apple", "mango", "banana"];
//loop through array using forEAch
fruits.forEach(function(fruit){
    console.log(fruit);
})

//Objects
let car = {
    brand: "Baleno",
    model: "latest",
    year:2025
}
console.log("brand is:", car.brand)
console.log("model is:", car.model)
console.log("year is:", car.year)

//Dom manipulation
document.getElementById("demo").innerText = "hello, Javascript";

//Even Handling

function showAlert(){
    alert("Button Clicked");
}
<button onclick="showAlert()">Click Me</button>

function showWarn(){
    console.log("this is warning")
}



//String Methods
let str = "JavaScript"

//Arraus Methods
let numbers = [3,4,21,53];
let max = Math.max(...number);
console.log(max);


