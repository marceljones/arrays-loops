// const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// // console.log(students.length)
// //****ASSESSING ITEMS IN ARRAY */
// console.log(students[1]);
// console.log(students[3]);
// console.log(students[students.length-1])


// students[0] = 'Mathew'
// console.log(students)

// //Array with a function

// const valuePrinter = (array, index) => {
//   return array[index];
// }
// // console.log(valuePrinter(students))

// const isGregHere = (arr) => {
//   return array.includes('Greg')
// };
// console.log(isGregHere(students))// 

//******FOR LOOPS******* */

// for (let i = 0; i <= 15; i++) {
//   console.log(i)
// }

// const functionForTad = () => {
//   for (let i = 0; i <= 15; i++) {
//     console.log(i)
//   }

// }
// functionForTad();

// const ec14Instructors = ['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets'];
// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i])
// }

//*****AARAYS, LOOPS, FUNCTIONS***** */
// const colors = ['rde', 'orange', 'yellow', 'green', 'blue', 'purple'];

// const colorLoop = () => {
//   let domString = '';

//   for (let i = 0; i < colors.length; i++) {
//     domString += `<h1>${colors[i]}</h1>`
//   }
//   console.log(domString);
// }
// colorLoop();

const instructors = [
  {first: 'Trinity', last: 'Christiana'},,
  {first: 'Aja', last: 'Washington'},
  {first: 'Teresa', last: 'Vasquez'}
];

const nameLoop = () => {
  let domString = '';
  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }
console.log(domString)
}
nameLoop()
