// What is a variable?

// Ans: Something that stores a piece of data


// Make me a variable called name and put your name as the value

var name = "Jonathan"
// Make sure to store proper data type, for strings: ""

// Make me a variable called age and put your age as the value

var age = 24


// Pretend it's your birthday and add 1 to your age

age = age + 1
//  age += 1
// age++ (only works when moving in increments of "1")


// Make me a variable called isStudent and set the value to true

var isStudent = true;
// True is NOT in quotation marks
// true and false are only lowercase

// What do we call the variable type I just had you make?

// Boolean


// What is a conditional statement and why are they handy?

// Conditional statements are if/else statements
// Check for certain outcome with rules we provide

// Write me a conditional statement that checks if your age is under 25. If it is, print "Wow, you're pretty young!" if it's not, print "Age = wisdom"

if(age < 25){
    console.log("Wow, you're pretty young!")
}
else {
    console.log("Age = wisdom")
}
// ELSE statements mean in ALL OTHER CASES which means we don't need a condition

// Write me a conditional statement that checks if you are a student. If you are, print "Good on you for learning to code!"


if(isStudent){
    console.log("Good on you for learning to code!")
}
// When variable put into condition is a "boolean" you don;t need to include == true/false


// The great == or === debate
// == checks for equality but does NOT account for type
// === checks for equality and DOES account for type
// ex:
if(7 == "7"){
    // This would be true with the double equal because the value is 7
}

if(7 === "7"){
    // This would NOT run because an integer is NOT the same thing as a string
}

if(isStudent){
    console.log("Good on you for learning to code!");
}

// {} -> curly braces
// [] -> square brackets




// Write a for loop that starts at 0, ends at 10, and increments up by 1. Inside the loop, print the value of i

for(var i=0; i<=10; i++){
    console.log(i);
}


// Now write me a for loop that starts at 20, ends at 1, and decrements by 2. Inside the loop, print the value of i

for(var i=20; i>=1; i-=2){
    console.log(i);
}


// Make me an array with the values [3,7,10,2,4,18]

var arr = [3,7,10,2,4,18]


// Pop quiz: what index value do arrays ALWAYS start on?

// Index value always starts at 0


// Pop quiz: if I wanted to grab the 2nd value in an array, how would I write that?

console.log(arr[1])


// Pop quiz: how would I grab the LAST value in an array?

console.log(arr[arr.length-1])


// Push the value 5 into the array you made

arr.push(5)


// Quick question: how would I REMOVE a value from the back?

arr.pop()


// Write me a for loop that traverses through the array from before and prints the values at each index

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}


// Now add to that loop some logic that checks if the value is greater than 5 and ONLY print the value if it is larger than 5

for(var i=0; i<arr.length; i++){
    if(arr[i] >5){
        console.log(arr[i]);
    }
    // Only need an "else" statement because we have nothing else to print
}


// Function time! Tell me what a function is and why we use them?

// Functions are a block of code (stored) with rules that we can call upon to help produce solutions


// If I write function doAThing(value)...what is the term we use for that "value" inside the parentheses?

// parameter
// we use parameters are used to pass data into the funtion to produce an output

// Write me a function that, when called, prints out "Hello there!"

function greeting(){
    console.log("Hello there!");
}

greeting();

// Now add the ability for the function to accept a name and print out 

function hello(name){
    console.log("Hello there " + name + "!");
    // String concatenation
    console.log(`Hello there ${name}!`)
}
hello("Jonathan");


// Quick! Tell me the coolest thing you've learned this week!

// How to recreate a f***ing website lol


// What are you most proud of yourself for figuring out this week?

// flex-box


// Are you excited to learn more?

// Hell yeah


// What can we do to make your time with us even better?

// N/A