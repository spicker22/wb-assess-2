// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.



/// Problem 1 /////
// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

// 1. select an element
const logIn = document.querySelector('#auth');
//console.log(logIn.textContent);

// 2. write a function
 const changeText = () => {
     logIn.textContent = "Log out";
 }

// 3. combine with event listener
logIn.addEventListener("click", changeText);


/// Problem 2 /////
// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

// // 1. select an element
// const sendAlert = document.querySelector('#submit');
// const alertMessage = document.querySelector('#alert-message');

// // 2. write a function
//  const textAlert = (event) => {
//     const target = event.target;
//     alert(target.value)
//  }

// // 3. combine with event listener
// sendAlert.addEventListener("click", textAlert);




/// Problem 3 /////
// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code



// // 1. select an element
// const doubleClick = document.querySelector('#item-adder');
// const addItem = document.querySelector('#list');

// // 2. write a function
//  const myFunc = (event) => {
//     'add another item to the list'
//  }

// // 3. combine with event listener
// doubleClick.addEventListener("dblclick", myFunc);



/// Problem 4 /////
// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.


// 1. select an element
const turnBlue = document.querySelector('#blue');
const turnRed = document.getElementById("red");

// 2. write a function
const turnTextBlue = () => {
    document.querySelector('#color-changer').style.color='blue';
 }
 const turnTextRed = () => {
    document.querySelector('#color-changer').style.color='red';
 }

// 3. combine with event listener
turnBlue.addEventListener("dblclick", turnTextBlue);
turnRed.addEventListener("dblclick", turnTextRed);



/// Problem 5 /////
// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span


// 1. select an element
const factorialButton = document.querySelector('#submit');


// 2. write a function
const factorialFunc = (num) => {
    if (num === 0 || num === 1)
    return 1;
    for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

// 3. combine with event listener
variable.addEventListener("click", factorialFunc);














// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code





// preventDefault is needed for forms! //
// Notes -> need to use this for 'Validate a Form' or others

// const someFunction = (event) => {
//     event.preventDefault()
//     'do something else'
// }




