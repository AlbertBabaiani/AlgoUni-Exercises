// 1.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწი რიცხვებს.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.filter((el) => !(el % 2)));

// 2.მომხმარებლების გაფილტვრა ასაკის მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,
// თვისებების სახელით და ასაკის მიხედვით, გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 8 },
//   { name: "Charlie", age: 12 },
//   { name: "David", age: 28 },
//   { name: "Emma", age: 35 },
// ];

// console.log(users.filter((user) => user.age > 18));

// 3.სტრიქონების გაფილტვრა სიგრძის მიხედვით: სტრიქონების მასივის გათვალისწინებით,
// გამოიყენეთ ფილტრი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ 5 სიმბოლოზე მეტ სტრიქონებს.

// const strings = ["apple", "banana", "kiwi", "strawberry", "pear"];
// const filteredStrings = strings.filter((str) => str.length > 5);

// console.log(filteredStrings);

// 4.გააორმაგეთ რიცხვები: მოცემული რიცხვების მასივისთვის, შექმენით ახალი მასივი, სადაც თითოეული რიცხვი გაორმაგდება.

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// 5.მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელებს დააბრუნებს.

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 22 },
// ];

// const names = users.map((user) => user.name);
// console.log(names);

// 6.სტრიქონების მასივის გათვალისწინებით, შევქმნათ ახალი მასივი, სადაც თითოეული სტრიქონი გარდაიქმნება მაღალ რეგისტრში,ანუ დიდ ასოებად.

// const strings = ["hello", "world", "javascript"];
// const upperCaseStrings = strings.map((str) => str.toUpperCase());
// console.log(upperCaseStrings);

// 7.იპოვეთ რიცხვების მასივში ყველა რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// 8.გვაქვს მასივი,სადაც ყრია ადამიანის სახელები,ჩვენი მიზანია შევქმნათ ობიექტი,
// რომელშიც მითითებული იქნება თუ რამდენჯერ მეორდება მასივში თითოეული სახელი. მაგალითად: { "გიო": 2, "საბა": 5, "ნიკა": 3 }

// const names = [
//   "გიო",
//   "საბა",
//   "ნიკა",
//   "გიო",
//   "საბა",
//   "საბა",
//   "ნიკა",
//   "საბა",
//   "ნიკა",
// ];
// const nameCounts = names.reduce((acc, name) => {
//   acc[name] = (acc[name] || 0) + 1;
//   return acc;
// }, {});
// console.log(nameCounts);

// 9.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი ზრდადობით.

// const nums = [5, 1, 9, 3, 7];
// const ascending = [...nums].sort((a, b) => a - b);
// console.log(ascending);

// 10.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი კლებადობით.

// const nums = [5, 1, 9, 3, 7];
// const descending = [...nums].sort((a, b) => b - a);
// console.log(descending);

// 11.მომხმარებლების დალაგება სახელების მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,
// დავაბრუნოთ მასივი რომელიც დალაგებული იქნება  ანბანურად მომხმარებლის სახელის მიხედვით.

// const users = [{ name: "Giorgi" }, { name: "Anna" }, { name: "Saba" }];
// const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedUsers);

// 12.სტრიქონების მასივის გათვალისწინებით, დავაბრუნოთ მასივი, რომელშიც იქნება ელემენტები ზრდადობით,
// სტრიქონების სიგრძის  მიხედვით.

// const strings = ["hello", "world", "JS", "programming"];
// const sortedByLength = [...strings].sort((a, b) => a.length - b.length);
// console.log(sortedByLength);

// 13.მასივის გათვალისწინებით, გამოიყენეთ forEach თითოეული ელემენტის კონსოლში დასაპრინტად.

// const arr = ["apple", "banana", "cherry"];
// arr.forEach((item) => console.log(item));

// 14.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ forEach რიცხვების  ჯამის გამოსათვლელად.

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(num => sum += num);
// console.log(sum);

// 15.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.
// რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.

// const nums = [1, 2, 3, 4, 5];
// const allPositive = nums.every(num => num > 0);
// const somePositive = nums.some(num => num > 0);
// console.log(allPositive, somePositive);

// 16.იურიდიული ასაკის ყველა მომხმარებელი: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით,
// შეამოწმეთ, არის თუ არა ყველა მომხმარებელი 18 წლის ან უფროსი ასაკის.

// const users = [{ age: 20 }, { age: 18 }, { age: 25 }];
// const allAdults = users.every(user => user.age >= 18);
// console.log(allAdults);

// 17.სტრიქონების მასივის გათვალისწინებით, შეამოწმეთ,არის თუ არა ყველა სტრიქონი ცარიელი.

// const strings = ["", "", "hello"];
// const allEmpty = strings.every(str => str === "");
// console.log(allEmpty);

// 18.ზოგიერთი რიცხვი კენტია: რიცხვების მასივის გათვალისწინებით,  შეამოწმეთ არის თუ არა კენტი რიცხვები.

// const numbers = [2, 4, 6, 7];
// const hasOdd = numbers.some(num => num % 2 !== 0);
// console.log(hasOdd);

// 19.ზოგიერთი მომხმარებელი ასაკობრივ ზღვარს ქვემოთ: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით,
// გამოიყენეთ some, რომ შეამოწმოთ არის თუ არა 18 წლამდე ასაკის მომხმარებლები.

// const users = [{ age: 20 }, { age: 17 }, { age: 25 }];
// const hasUnderage = users.some((user) => user.age < 18);
// console.log(hasUnderage);

// 20.დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და
// აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// const capitalizeWords = (s) =>
//   s
//     .split(" ")
//     .map((el) => el?.[0]?.toUpperCase() + el.slice(1))
//     .join(" ");

// const s = "hello world from javascript";

// console.log(capitalizeWords(s));

// 21.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების
// უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// const users = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "London" },
//   { name: "Charlie", age: 25, city: "Berlin" },
//   { name: "David", age: 30, city: "New York" },
// ];

// const getUniques = (persons, property) => [
//   ...new Set(persons.map((person) => person[property])),
// ];

// console.log(getUniques(users, "city"));

// 22.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს
// თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.

// const isPangram = (s) =>
//   new Set(s.toLowerCase().match(/[a-z]/g) || []).size === 26;

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// 23.დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და
// აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების,
// როგორიცაა "the", "a" და "is".

// function getUniqueWords(s) {
//   const exclude = new Set(["the", "a", "is"]);

//   return new Set(
//     s
//       .toLowerCase()
//       .match(/\b\w+\b/g)
//       .filter((el) => !exclude.has(el.toLowerCase()))
//       .sort()
//   );
// }

// console.log(
//   getUniqueWords(
//     "The quick brown fox jumps over a lazy dog, but the dog is lazy."
//   )
// );

// 24.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.

// const arr = [0, "", null, undefined, NaN, "hello", 42];
// const truthyArr = arr.filter(Boolean);
// console.log(truthyArr);

// 25.დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად

// const reverseSentence = (str) => str.split(" ").reverse().join(" ");
// console.log(reverseSentence("Hello world from JavaScript"));

// პროექტები

// პროექტი 19 - Paint Calculator - საღებავის კალკულატორი

// ზოგჯერ, დამრგვალების სტანდარტული წესების ნაცვლად, გვიწევს, რიცხვი მომდევნო რიცხვზე დავამრგვალოთ.
// გამოთვალეთ საღებავი გალონებში, რომელიც ოთახის ჭერის შესაღებადაა საჭირო. პროგრამამ input-ად უნდა
// მოითხოვოს ოთახის სიგრძე და სიგანე. ჩავთვალოთ, რომ ერთი გალონი 350 კვადრატულ ფუტს მოიცავს.
// მთელი რიცხვით აჩვენეთ გალონების ის რაოდენობა, რაც საჭიროა ჭერის შესაღებად.

// const length = 12;
// const width = 15;
// const coveragePerGallon = 350;

// const area = length * width;
// const gallonsNeeded = Math.ceil(area / coveragePerGallon);

// console.log(
//   `You will need to purchase ${gallonsNeeded} gallons of paint to cover ${area} square feet.`
// );

// პროექტი 20 - Self-Checkout - თვით-გადახდა

// შექმენით მარტივი გადახდის სისტემა, რომლითაც მომხმარებელი შეძენილი პროდუქტების ფასს გამოითვლის.
// პროგრამამ input-ად უნდა მოითხოვოს სამი ნივთის ფასები და თითოეულის რაოდენობა. გამოთვალეთ მათი საერთო ფასი.
// შემდეგ, გამოთვალეთ დამატებითი - 5.5%-იანი გადასახადი (tax). საბოლოოდ, პროგრამამ უნდა დაბეჭდოს პროდუქტების ფასი,
// გადასახადი და მთლიანი გადასახდელი თანხა - ანუ ფასისა და გადასახადის ჯამი.

// const items = [
//   { price: 25, quantity: 2 },
//   { price: 10, quantity: 1 },
//   { price: 4, quantity: 1 },
// ];

// const taxRate = 0.055;
// const subtotal = items.reduce(
//   (sum, item) => sum + item.price * item.quantity,
//   0
// );
// const tax = subtotal * taxRate;
// const total = subtotal + tax;

// console.log(`Subtotal: $${subtotal.toFixed(2)}`);
// console.log(`Tax: $${tax.toFixed(2)}`);
// console.log(`Total: $${total.toFixed(2)}`);

// პროექტი 21 - Currency Conversion - ვალუტის კონვერტაცია

// ზოგჯერ შეიძლება დაგჭირდეთ ვალუტის გაცვლის კურსებთან შეხება და უნდა დარწმუნდეთ, რომ თქვენი გამოთვლები მაქსიმალურად ზუსტია.
// დაწერეთ პროგრამა, რომელიც გარდაქმნის ვალუტას. კერძოდ, გადააკეთეთ ევრო აშშ დოლარში. მოითხოვეთ თანხის რაოდენობა ევროში და ევროს მიმდინარე კურსი. ამობეჭდეთ ახალი თანხა  დოლარში.

// const amountFrom = 81;
// const exchangeRate = 137.51;
// const amountTo = (amountFrom * exchangeRate) / 100;

// console.log(`${amountFrom} euros at an exchange rate of ${exchangeRate} is ${amountTo.toFixed(2)} U.S. dollars.`);

// პროექტი 22 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა

// მარტივი პროცენტის გამოთვლა შესანიშნავი გზაა იმის სწრაფად გასარკვევად, აქვს თუ არა ინვესტიციას ღირებულება.
// შექმენით პროგრამა, რომელიც გამოითვლის მარტივ პროცენტს. Input-ად მოითხოვეთ ძირითადი თანხა, განაკვეთი პროცენტში და,
// შემდეგ კი აჩვენეთ დარიცხული თანხა (ძირი + პროცენტი). მარტივი პროცენტის ფორმულა არის A = P(1 + rt),
// სადაც P არის ძირითადი თანხა, r არის წლიური საპროცენტო განაკვეთი, t არის წლების რაოდენობა და A არის თანხა ინვესტიციის დასრულებისას.

// const principal = 1500;
// const rate = 4.3 / 100;
// const years = 4;

// const amount = principal * (1 + rate * years);

// console.log(
//   `After ${years} years at ${
//     rate * 100
//   }%, the investment will be worth $${amount.toFixed(2)}.`
// );

// პროექტი 23 - Determining Compound Interest - რთული პროცენტის გამოთვლა

//ინვესტიციების უმეტესობა იყენებს რთული პროცენტის ფორმულას, რომელიც ბევრად უფრო ზუსტია.
// ეს ფორმულა მოითხოვს, რომ პროგრამებში ხარისხის მაჩვენებლები ჩავრთოთ. დაწერეთ პროგრამა,
// რომ გამოვთვალოთ ინვესტიციის ღირებულება დროთა განმავლობაში. პროგრამამ უნდა მოითხოვოს საწყისი თანხა,
// ინვესტიციის წლების რაოდენობა, საპროცენტო განაკვეთი და წლიური პერიოდების რაოდენობა. ფორმულა შემდეგია: A = P(1 + r/n)nt, სადაც:
// P არის ძირითადი თანხა.
// r არის წლიური საპროცენტო განაკვეთი.
// t არის წლების რაოდენობა.
// n არის პროცენტის დარიცხვის რაოდენობა წელიწადში.
// A არის თანხა ინვესტიციის ბოლოს.

// const principal = 1500;
// const rate = 4.3 / 100;
// const years = 6;
// const n = 4;

// const amount = principal * Math.pow(1 + rate / n, n * years);

// console.log(
//   `$${principal} invested at ${
//     rate * 100
//   }% for ${years} years compounded ${n} times per year is $${amount.toFixed(
//     2
//   )}.`
// );

// პროექტი 24 - Deep Thought - ღრმა ფიქრი

// შექმენით პროგრამა, რომელიც მომხმარებელს ცხოვრებაზე, სამყაროსაა და ყველაფერზე მნიშვნელოვან კითხვას დაუსვამს.
// თუ მომხმარებელი input-ად 42-ს შეიყვანს, რიცხვითი ან სტრიქონის ტიპით - forty-two ან forty two,
// პროგრამამ Yes უნდა დაბეჭდოს, ყველა სხვა შემთხვევაში კი - No.

// const answers = ["42", "forty-two", "forty two"];

// const deepThought = (input) =>
//   answers.includes(input.toLowerCase().trim()) ? "Yes" : "No";

// console.log(deepThought("42"));
// console.log(deepThought("forty-two"));
// console.log(deepThought("forty two"));
// console.log(deepThought("43"));
// console.log(deepThought(" Life "));

// პროექტი 25 - Home Federal Saving Bank  - ფედერალური ბანკი

// Seinfeld-ის მე-7 სეზონის 24-ე ეპიზოდში, კრამერი სტუმრობს ბანკს, რომელიც 100 დოლარის ჩუქებას ჰპირდება ყველას,
// ვისაც მისალმების ნიშნად hello-ს არ ეტყვიან. კრამერს hey-ს ეუბნებიან, რაზეც ის ამბობს, რომ ეს hello არ არის და ამიტომ,
// ბანკისგან 100 დოლარს ითხოვს. ბანკის მენეჯერი მას კომპრომისს სთავაზობსს: "თქვენ მიიღეთ მისალმება,
// რომელიც იწყება "h"-ით, $20-ზე რას იტყვით?" კრამერი თანხას იღებს.

// შექმენით პროგრამა, რომელიც მომხმარებელს მისალმებას მოსთხოვს. თუ მისალმება hello-თი იწყება, დაბეჭდეთ $0;
// თუ input "h"-ით იწყება, მაგრამ სიტყვა hello არ არის, $20 დაბეჭდეთ; სხვა შემთხვევებში კი - $100.

// const federalBank = (greeting) => {
//   const cleanGreeting = greeting.trim().toLowerCase();

//   return cleanGreeting.startsWith("hello")
//     ? "$0"
//     : cleanGreeting.startsWith("h")
//     ? "$20"
//     : "$100";
// };

// console.log(federalBank("Hello"));
// console.log(federalBank(" Hi "));
// console.log(federalBank("hey"));
// console.log(federalBank("Ciao"));
// console.log(federalBank(" Greetings "));

// პროექტი 26 - Felipe's Taqueria - ფელიპეს სასადილო

// ჰარვარდის მოედანზე ერთ-ერთი ყველაზე პოპულარული საკვები ადგილია Felipe's Taqueria,
// რომელიც გთავაზობთ მენიუს, სადაც თითოეული დასახელების ღირებულება კერძის ფასია:
// {
//     "Baja Taco": 4.25,
//     "Burrito": 7.50,
//     "Bowl": 8.50,
//     "Nachos": 11.00,
//     "Quesadilla": 8.50,
//     "Super Burrito": 8.50,
//     "Super Quesadilla": 9.50,
//     "Taco": 3.00,
//     "Tortilla Salad": 8.00
// }

// შექმენით პროგრამა, რომელიც მომხმარებელს საშუალებას აძლევს, განათავსოს შეკვეთა - სთხოვს მას თითო კერძს თითო ხაზზე,
// სანამ მომხმარებელი არ შეიყვანს control-d-ს (რაც არის პროგრამაში input-ის შეყვანის დასრულების საშუალება).
// ყოველი ჩაწერილი ელემენტის შემდეგ, აჩვენეთ აქამდე ჩაწერილი ყველა კერძის ჯამური ღირებულება, პრეფიქსით - დოლარის ნიშნით ($)
// და ასწილადად დაფორმატებული. მომხმარებლის input-თან მოპყრობისას არ პროგრამამ დიდი და
// პატარა რეგისტრის სიმბოლოები არ უნდა გაითვალისწინოს (case-insensitive). უგულებელყოთ ნებისმიერი ისეთი input,
// რომელიც არ ემთხვევა კერძის სახელს.

// const menu = {
//   "baja taco": 4.25,
//   burrito: 7.5,
//   bowl: 8.5,
//   nachos: 11.0,
//   quesadilla: 8.5,
//   "super burrito": 8.5,
//   "super quesadilla": 9.5,
//   taco: 3.0,
//   "tortilla salad": 8.0,
// };

// let total = 0;

// while (true) {
//   let item = prompt("Item: ");
//   if (!item) break;ß

//   let normalizedItem = item.trim().toLowerCase();
//   if (menu[normalizedItem] !== undefined) {
//     total += menu[normalizedItem];
//     console.log(`Total: $${total.toFixed(2)}`);
//   }
// }

// პროექტი 27 - Emojize - ემოჯებად გადაქცევა

// იმის გამო, რომ emoji არ არის ისეთი მარტივი ასაკრეფი, როგორიც ტექსტი, ყოველ შემთხვევაში,
// ლეპტოპებსა და პერსონალურ კომპიუტერებზე, ზოგიერთ პროგრამას აქვს „კოდების“ მხარდაჭერა,
// რომლითაც შეგიძლიათ აკრიფოთ, მაგალითად, 👍, რომელიც ავტომატურად გარდაიქმნება -> 👍-ად.
// ზოგიერთი პროგრამა დამატებით მხარს უჭერს მეტსახელებს, რომლითაც შეგიძლიათ, უფრო მოკლედ აკრიფოთ,
// მაგალითად, 👍, რომელიც ასევე ავტომატურად გარდაიქმნება -> 👍.

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს str-ს (სტრიქონს) ინგლისურად და შემდეგ ბეჭდავს ამ
// str-ის „emojized“ ვერსიას, გარდაქმნის მასში არსებულ ნებისმიერ კოდს (ან მეტსახელს) შესაბამის emoji-ად.

// const emojiMap = {
//   ":thumbs_up:": "👍",
//   ":thumbsup:": "👍",
//   ":earth_africa:": "🌍",
//   ":earth_americas:": "🌎",
//   ":smile:": "😃",
// };

// const emojize = (str) =>
//   str.replace(/:\w+:/g, (match) => emojiMap[match] || match);
