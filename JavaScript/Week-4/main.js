// 1. დაწერეთ ფუქნცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".

// function sayHello() {
//   console.log("Hello World!");
// }

// sayHello();

////////////////////////////////////////////////////////////////////////////////

// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრა მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"

// function greet(name) {
//   console.log(`Hello, ${name}.`);
// }

// const user_name = prompt("Enter your name: ");

// greet(user_name);

////////////////////////////////////////////////////////////////////////////////

// 3. დაწერეთ ფუნქცია, სახელად sum, რომელიც არგუმენტებად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.
// შედეგი გამოიტანეთ ტერმინალში.

// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}.`;

// let a = -1,
//   b = a;

// do {
//   a = Number(prompt("Enter the first number: "));
// } while (isNaN(a));

// do {
//   b = Number(prompt("Enter the second number: "));
// } while (isNaN(b));

// console.log(sum(a, b));

////////////////////////////////////////////////////////////////////////////////

// 4. დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს
// და დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.

// const calculateArea = (width, height) =>
//   `The area of a rectangle is ${height * width}.`;

// let width = -1,
//   height = width;

// do {
//   width = Number(prompt("Enter the width: "));
// } while (isNaN(width));

// do {
//   height = Number(prompt("Enter the height: "));
// } while (isNaN(height));

// console.log(calculateArea(width, height));

////////////////////////////////////////////////////////////////////////////////

// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს.
// გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function.

// function biggest_function_declaration(a, b) {
//   return Math.max(a, b);
// }

// const biggest_function_expression = function (a, b) {
//   return Math.max(a, b);
// };

// const biggest_arrow_function = (a, b) => Math.max(a, b);

// let a = -1,
//   b = a;

// do {
//   a = Number(prompt("Enter the first number: "));
// } while (isNaN(a));

// do {
//   b = Number(prompt("Enter the second number: "));
// } while (isNaN(b));

// console.log(biggest_function_declaration(a, b));
// console.log(biggest_function_expression(a, b));
// console.log(biggest_arrow_function(a, b));

////////////////////////////////////////////////////////////////////////////////

// 6. დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".

// const showHelloWorld_1 = (n) => "Hello World! ".repeat(n);

// const showHelloWorld_2 = (n) => {
//   for (let i = 0; i < n; i++) console.log("Hello, World!");
// };

// let quantity = -1;

// do {
//   quantity = Number(prompt("Enter the quantity: "));
// } while (isNaN(quantity));

// console.log(showHelloWorld_1(quantity));
// console.log(showHelloWorld_2(quantity));

////////////////////////////////////////////////////////////////////////////////

// 7 .დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში.
// ფორმულა - (Celsius * 9/5) + 32

// const celsiusToFahrenheit = function (celsius) {
//   return Math.round((celsius * 9) / 5 + 32);
// };

// let celsius = -1;

// do {
//   celsius = Number(prompt("Enter the temperature in celsius: "));
// } while (isNaN(celsius));

// console.log(celsiusToFahrenheit(celsius));

////////////////////////////////////////////////////////////////////////////////

// 8. დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

// function sumDigits_1(num) {
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }

// function sumDigits_2(num) {
//   let sum = 0;

//   for (let digit of num.toString()) {
//     sum += Number(digit);
//   }

//   return sum;
// }

// let num = -1;

// do {
//   num = Number(prompt("Enter the number: "));
// } while (isNaN(num));

// console.log(`The sum of digits is ${sumDigits_1(Math.abs(num))}`);
// console.log(`The sum of digits is ${sumDigits_2(Math.abs(num))}`);

////////////////////////////////////////////////////////////////////////////////

// 9. დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და
// აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.

// function countBs(word){
//     return (word.match(/B/g) || []).length
// }

// let word = "";

// do {
//   word = prompt("Enter the word: ").trim();
// } while (!word.length);

// console.log(`In the word '${word}' the letter 'B' is repeated ${countBs(word)} times.`)

////////////////////////////////////////////////////////////////////////////////

// 10. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს გარკვეულ შუალედში.
// მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.

// function calculateSumBetween(a, b) {
//   let sum = 0;

//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }

//   return sum;
// }

// let a = -1,
//   b = a;

// do {
//   a = Number(prompt("Enter the first number: "));
// } while (isNaN(a));

// do {
//   b = Number(prompt("Enter the second number: "));
// } while (isNaN(b));

// console.log(`The sum between ${a} and ${b} is ${calculateSumBetween(a, b)}.`);

////////////////////////////////////////////////////////////////////////////////

// 11. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი
// (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.

// const isPalindrome = function (word) {
//   return word === word.split("").reverse().join("");
// };

// let word = "";

// do {
//   word = prompt("Enter the word: ").trim();
// } while (!word.length);

// console.log(isPalindrome(word.toLowerCase()));

////////////////////////////////////////////////////////////////////////////////
// პროექტები
////////////////////////////////////////////////////////////////////////////////

// პროექტი 1 - Saying Hello

// const name = prompt("What is your name?");
// console.log(`Hello, ${name}, nice to meet you!`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 2 - Counting the Number of Characters

// const input = prompt("What is the input string?");
// console.log(`${input} has ${input.length} characters.`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 3 - Printing Quotes

// const quote = prompt("What is the quote?");
// const author = prompt("Who said it?");
// console.log(`${author} says, "${quote}"`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 4 - Indoor Voice

// const text = prompt("Enter a string:");
// console.log(text.toLowerCase());

////////////////////////////////////////////////////////////////////////////////

// პროექტი 5 - Playback Speed

// const sentence = prompt("Enter a sentence:");
// console.log(sentence.split(" ").join("..."));

////////////////////////////////////////////////////////////////////////////////

// პროექტი 6 - Making Faces

// function convert(str) {
//     return str.replace(/:\)/g, "🙂").replace(/:\(/g, "🙁");
// }

// const input = prompt("Enter a string:");
// const result = convert(input);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 7 - Mad Libs

// function madLibs() {
//     const noun = prompt("Enter a noun:");
//     const verb = prompt("Enter a verb:");
//     const adjective1 = prompt("Enter an adjective:");
//     const adverb = prompt("Enter an adverb:");
//     const adjective2 = prompt("Enter another adjective:");

//     console.log(`Do you ${verb} your ${adjective1} ${noun} ${adverb}? That's ${adjective2}!`);
// }

// madLibs();

////////////////////////////////////////////////////////////////////////////////

// პროექტი 8 - Guessing Game

// function askLevel() {
//   let level = -1;
//   while (true) {
//     level = prompt("Level: ");
//     if (parseInt(level) > 0) {
//       return parseInt(level);
//     }
//     console.log("Please enter a positive integer.");
//   }
// }

// function askGuess() {
//   let guess = -1;
//   while (true) {
//     guess = prompt("Guess: ");
//     if (parseInt(guess)) {
//       return parseInt(guess);
//     }
//     console.log("Please enter a valid number.");
//   }
// }

// function guessingGame() {
//   const level = askLevel();
//   const target = Math.floor(Math.random() * level) + 1;
//   let guess = -1;

//   do {
//     guess = askGuess();

//     if (guess < target) {
//       console.log("Too small!");
//     } else if (guess > target) {
//       console.log("Too large!");
//     } else {
//       console.log("Just right!");
//       break;
//     }
//   } while (true);
// }

// guessingGame();

////////////////////////////////////////////////////////////////////////////////

// პროექტი 9 - Little Professor - პატარა პროფესორი

// function askLevel() {
//   let level;
//   while (true) {
//     level = prompt("Select level (1, 2, or 3): ");
//     if (["1", "2", "3"].includes(level)) {
//       return parseInt(level);
//     }
//     console.log("Please select 1, 2, or 3.");
//   }
// }

// function generateProblem(level) {
//   const x = Math.floor(Math.random() * 10 * level) + 1;
//   const y = Math.floor(Math.random() * 10 * level) + 1;
//   return { x, y };
// }

// function littleProfessor() {
//   const level = askLevel();
//   let score = 0;

//   for (let i = 0; i < 10; i++) {
//     const { x, y } = generateProblem(level);
//     let attempts = 0;
//     let answer;

//     while (attempts < 3) {
//       answer = prompt(`${x} + ${y} = `);

//       if (answer === null || isNaN(answer)) {
//         console.log("EEE");
//         attempts++;
//       } else {
//         if (parseInt(answer) === x + y) {
//           score++;
//           break;
//         } else {
//           console.log("EEE");
//           attempts++;
//         }
//       }

//       if (attempts === 3) {
//         console.log(`The correct answer was: ${x + y}`);
//       }
//     }
//   }

//   console.log(`Score: ${score}/10`);
// }

// littleProfessor();
