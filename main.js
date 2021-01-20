const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length)
//****ASSESSING ITEMS IN ARRAY */
console.log(students[1]);
console.log(students[3]);
console.log(students[students.length-1])


students[0] = 'Mathew'
console.log(students)

//Array with a function

const valuePrinter = (array, index) => {
  return array[index];
}
// console.log(valuePrinter(students))

const isGregHere = (arr) => {
  return array.includes('Greg')
};
console.log(isGregHere(students))// 

