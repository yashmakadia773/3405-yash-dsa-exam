// let arr = [1,2,3 ,4,5,6,7,8,9,10];
// let position = 3;
// let element = 50;

// for (let j = arr.length; j >= position; j--) {
//     arr[j] = arr[j - 1];
// }
// arr[position - 1] = element;

// console.log(arr);

// delete the element

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 5;

for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);