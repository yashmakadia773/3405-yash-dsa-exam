let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let value = 7;

function li(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {

            return true;
        }
    }
    return false;
}
let data = li(arr, value);

if (data == true) {
    console.log("element is exist ");
}
else {
    console.log("element is not exist");
}