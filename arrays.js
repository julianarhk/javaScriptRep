let myArray = ['apple', 'banana', 'orange'];
console.log(myArray[0]); // 'apple'
console.log(myArray[1]); // 'banana'
console.log(myArray[2]); // 'orange'

let myArray = [1, 2, 3];

myArray.push(4); // adds 4 to the end of the array
console.log(myArray); // [1, 2, 3, 4]

myArray.pop(); // removes and returns 4
console.log(myArray); // [1, 2, 3]

myArray.unshift(0); // adds 0 to the beginning of the array
console.log(myArray); // [0, 1, 2, 3]

let newArray = myArray.concat([4, 5]); // merges myArray and [4, 5] into a new array
console.log(newArray); // [0, 1, 2, 3, 4, 5]

let slicedArray = myArray.slice(1, 3); // returns a copy of myArray from index 1 up to but not including index 3
console.log(slicedArray); // [1, 2]

myArray.splice(1, 2); // removes 2 elements from myArray starting at index 1
console.log(myArray); // [0, 3]
