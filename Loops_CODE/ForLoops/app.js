// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
// OUR FIRST FOR LOOP
// ======================================
//************************************************GUESSING GAME******************************* */
// for (let num = 1; num <= 10; num += 1) {
//     console.log(num);
// }
// let input = parseInt(prompt("enter your maximum number"));
// const random = Math.floor(Math.random() * input + 1);
// console.log(random);
// let count = 0;
// let guess = parseInt(prompt('OK Enter your code'));
// while (guess !== random) {
//     count++;
//     if (guess > random) {
//         guess = parseInt(prompt("to High"));
//     }
//     else if (guess < random) {
//         guess = parseInt(prompt('to LOW'));
//     }
// }
// console.log('you got it');
// console.log(`it took you ${count + 1} counts`);
//************************************TODO LIST IN JS************************************** */
// let input = prompt("Enter your todo list");
// const todo = ['chihcken'];
// while (input !== 'quit') {
//     if (input === 'list') {
//         console.log('****************');
//         for (let i = 0; i < todo.length; i++) {
//             console.log(`${i + 1} ${todo[i]}`);
//         }
//         console.log('****************');
//     }
//     else if (input === 'new') {
//         const newList = prompt('Enter new Entry');
//         todo.push(newList);
//         //alert('new Entry added');
//     }
//     else if (input === 'delete') {
//         todo.shift();
//         console.log('TODO DELETED');
//     }
//     input = prompt("Enter your todo list");
// }
// console.log('You Quit');
// ======================================
// MORE EXAMPLES OF FOR LOOPS!
// ======================================

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ================================
// ================================
// for (let i = 20; i >= 0; i++) {
//     console.log(i)
// }
// ================================
// ================================





