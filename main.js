const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(', ');
const string1ToArray = string1.split(',');
// console.log(string1);
// console.log(string1ToArray)

//PUSH AND POP

array1.pop();
console.log(array1)
array1.push('cat');
console.log(array1)

//UNSHIFT() AND SHIFT()

array1.unshift('cow');
console.log(array1)
array1.shift();
console.log(array1)
