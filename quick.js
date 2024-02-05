function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var num = arr[0];
    var left = []; 
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        if(arr[i]<num){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    result = quickSort(left) 
    result = result.concat(num)  
    result = result.concat(quickSort(right)) 
    
    return result;
    
};

var unsortedarr = [1,5,2,4,6,7,9,10];
console.log(quickSort(unsortedarr));