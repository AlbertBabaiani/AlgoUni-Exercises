// 1. დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("Sum:", sumArray(numbers));

////////////////////////////////////////////////////////////////////////////////

// 2. დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// function averageArray(arr) {
//   const sum = arr.reduce((sum, num) => sum + num, 0);
//   return sum / arr.length;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("Average:", averageArray(numbers));

////////////////////////////////////////////////////////////////////////////////

// 3. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

// function sortArray(arr) {
//   return arr.sort((a, b) => a - b);
// }

// const numbers = [5, 2, 9, 1, 3];
// console.log("Sorted:", sortArray(numbers));

////////////////////////////////////////////////////////////////////////////////

// 4. დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// function findMax(arr) {
//   return Math.max(...arr);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("Max:", findMax(numbers));

////////////////////////////////////////////////////////////////////////////////

// 5. დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// function findMin(arr) {
//   return Math.min(...arr);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("Min:", findMin(numbers));

////////////////////////////////////////////////////////////////////////////////

// 6. დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

// function containsElement(arr, element) {
//   return arr.includes(element);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("Contains 3:", containsElement(numbers, 3));
// console.log("Contains 6:", containsElement(numbers, 6));

////////////////////////////////////////////////////////////////////////////////

// 7. დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

// function removeElement(arr, element) {
//   const index = arr.indexOf(element);
//   if (index !== -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("After removing 3:", removeElement(numbers, 3));

////////////////////////////////////////////////////////////////////////////////

// 8. დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

// function countOccurrences(arr, element) {
//   return arr.filter((item) => item === element).length;
// }

// const numbers = [1, 2, 3, 4, 5, 3, 3];
// console.log("Occurrences of 3:", countOccurrences(numbers, 3));

////////////////////////////////////////////////////////////////////////////////

// 9. დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.

// function sumEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log("Sum of even numbers:", sumEvenNumbers(numbers));

////////////////////////////////////////////////////////////////////////////////

// 10. დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

// function secondLargest(arr) {
//   const uniqueArr = [...new Set(arr)];
//   uniqueArr.sort((a, b) => b - a);
//   return uniqueArr[1];
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log("Second largest number:", secondLargest(numbers));

////////////////////////////////////////////////////////////////////////////////

// 11. დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

// function arraysAreEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log("Arrays are equal:", arraysAreEqual(arr1, arr2));

////////////////////////////////////////////////////////////////////////////////

// 12. დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

// function mergeSortedArrays(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log("Merged sorted array:", mergeSortedArrays(arr1, arr2));

////////////////////////////////////////////////////////////////////////////////

// 13. დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.

// function sortStrings(arr) {
//   return arr.sort();
// }

// const strings = ["banana", "apple", "cherry"];
// console.log("Sorted strings:", sortStrings(strings));

////////////////////////////////////////////////////////////////////////////////

// 14. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// function findCommonElements(...arrays) {
//   return arrays.reduce((acc, arr) => acc.filter((item) => arr.includes(item)));
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [2, 3, 5, 6];
// const arr3 = [3, 7, 8];
// console.log("Common elements:", findCommonElements(arr1, arr2, arr3));

////////////////////////////////////////////////////////////////////////////////

// 15. შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

// const car = {
//   make: "Mercedes-Amg",
//   model: "W11",
//   year: 2020,
// };

// console.log(car);

////////////////////////////////////////////////////////////////////////////////

// 16. დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.

// const car = {
//   make: "Mercedes-Amg",
//   model: "W11",
//   year: 2020,
//   start() {
//     console.log("The car is starting!");
//   },
// };

// car.start();

////////////////////////////////////////////////////////////////////////////////

// 17. შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

// const person = {
//   name: "Lewis",
//   age: 44,
//   city: "Stevenage",
// };

// console.log(person.name);

////////////////////////////////////////////////////////////////////////////////

// 18. დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.

// const person = {
//   name: "Lewis",
//   age: 44,
//   city: "Stevenage",
//   job: "Formula 1 driver"
// };

// console.log(person);

////////////////////////////////////////////////////////////////////////////////
// პროექტები
////////////////////////////////////////////////////////////////////////////////

// პროექტი 10 - ქულების გამომთვლელი

// function calculateGrade() {
//   let score = parseInt(prompt("Enter the student's score:"));
//   let grade = "F";

//   if (score >= 90 && score <= 100) grade = "A";
//   else if (score >= 80) grade = "B";
//   else if (score >= 70) grade = "C";
//   else if (score >= 60) grade = "D";
//   else if (score >= 0) grade = "F";
//   else {
//     console.log("Invalid score.");
//     return;
//   }

//   console.log(`Student's Score: ${score}`);
//   console.log(`Grade: ${grade}`);
// }

// calculateGrade();

////////////////////////////////////////////////////////////////////////////////

// პროექტი 11 - Simple Math

// function simpleMath(num1, num2) {
//   let sum = num1 + num2;
//   let difference = num1 - num2;
//   let product = num1 * num2;
//   let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

//   return [sum, difference, product, quotient];
// }

// let num1 = parseFloat(prompt("What is the first number?"));
// let num2 = parseFloat(prompt("What is the second number?"));

// let [sum, difference, product, quotient] = simpleMath(num1, num2);

// console.log(`${num1} + ${num2} = ${sum}`);
// console.log(`${num1} - ${num2} = ${difference}`);
// console.log(`${num1} * ${num2} = ${product}`);
// console.log(`${num1} / ${num2} = ${quotient}`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 12 - Einstein - აინშტაინი

// function calculateEnergy() {
//   const c = 300000000;
//   let mass = parseInt(prompt("M: "));
//   let energy = mass * c ** 2;

//   console.log(`E: ${energy}`);
// }

// calculateEnergy();

////////////////////////////////////////////////////////////////////////////////

// პროექტი 13 - Tip Calculator - "ჩაის" კალკულატორი

// function parseAmount(input) {
//   return parseFloat(input.replace("$", ""));
// }

// function parsePercentage(input) {
//   return parseFloat(input.replace("%", "")) / 100;
// }

// function tipCalculator() {
//   let mealCost = parseAmount(prompt("How much was the meal? "));
//   let tipPercent = parsePercentage(
//     prompt("What percentage would you like to tip? ")
//   );

//   let tipAmount = mealCost * tipPercent;
//   return tipAmount.toFixed(2);
// }

// console.log(`Leave $${tipCalculator()}`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 14 - Retirement Calculator - საპენსიო კალკულატორი

// function retirementCalculator() {
//   let currentAge = parseInt(prompt("What is your current age?"));
//   let retirementAge = parseInt(prompt("At what age would you like to retire?"));

//   let yearsLeft = retirementAge - currentAge;
//   let currentYear = new Date().getFullYear();
//   let retirementYear = currentYear + yearsLeft;

//   return {
//     yearsLeft,
//     currentYear,
//     retirementYear
//   };
// }

// const { yearsLeft, currentYear, retirementYear } = retirementCalculator();

// console.log(`You have ${yearsLeft} years left until you can retire.`);
// console.log(`It's ${currentYear}, so you can retire in ${retirementYear}.`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი

// function calculateRoomArea() {
//   let lengthFeet = parseFloat(prompt("What is the length of the room in feet?"));
//   let widthFeet = parseFloat(prompt("What is the width of the room in feet?"));

//   let areaFeet = lengthFeet * widthFeet;
//   let areaMeters = areaFeet * 0.09290304;

//   return { lengthFeet, widthFeet, areaFeet, areaMeters };
// }

// const { lengthFeet, widthFeet, areaFeet, areaMeters } = calculateRoomArea();

// console.log(`You entered dimensions of ${lengthFeet} feet by ${widthFeet} feet.`);
// console.log("The area is:");
// console.log(`${areaFeet.toFixed(2)} square feet`);
// console.log(`${areaMeters.toFixed(3)} square meters`);

////////////////////////////////////////////////////////////////////////////////

// პროექტი 16 - Pizza Party - პიცის წვეულება

function pizzaParty() {
  let people = parseInt(prompt("How many people?"));
  let pizzas = parseInt(prompt("How many pizzas do you have?"));
  let slicesPerPizza = parseInt(prompt("How many slices per pizza?"));

  let totalSlices = pizzas * slicesPerPizza;
  let slicesPerPerson = Math.floor(totalSlices / people);
  let leftoverSlices = totalSlices % people;

  console.log(
    `${people} ${people === 1 ? "person" : "people"} with ${pizzas} ${
      pizzas === 1 ? "pizza" : "pizzas"
    }`
  );
  console.log(
    `Each person gets ${slicesPerPerson} ${
      slicesPerPerson === 1 ? "piece" : "pieces"
    } of pizza.`
  );
  console.log(
    `There ${leftoverSlices === 1 ? "is" : "are"} ${leftoverSlices} leftover ${
      leftoverSlices === 1 ? "piece" : "pieces"
    }.`
  );
}

pizzaParty();

////////////////////////////////////////////////////////////////////////////////

// პროექტი 17 - Grocery List - სასურსათო სია

// function groceryList() {
//   let items = {};
//   let input;

//   while (true) {
//     input = prompt("Enter an item (or '-' to finish):").trim().toLowerCase();
//     if (input === "-") break;
//     items[input] = (items[input] || 0) + 1;
//   }

//   console.log("\nGrocery List:");
//   Object.entries(items)
//     .sort(([a], [b]) => a.localeCompare(b))
//     .forEach(([item, count]) =>
//       console.log(`< ${count} ${item.toUpperCase()}`)
//     );
// }

// groceryList();

////////////////////////////////////////////////////////////////////////////////

// პროექტი 18 - Adieu, adieu - მშვიდობით, მშვიდობით

// function farewellSong() {
//   let names = [];
//   let input;

//   while (true) {
//     input = prompt("Name:").trim();
//     if (input === "") break;
//     names.push(input);
//   }

//   function formatNames(names) {
//     if (names.length === 1) return names[0];
//     if (names.length === 2) return names.join(" and ");
//     return names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
//   }

//   console.log(`Adieu, adieu, to ${formatNames(names)}`);
// }

// farewellSong();
