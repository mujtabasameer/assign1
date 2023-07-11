var num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < num_arr.length; i++) {
    if (num_arr[i] == 1) {
        console.log("'".concat(num_arr[i], "st'"));
    }
    if (num_arr[i] == 2) {
        console.log("'".concat(num_arr[i], "nd'"));
    }
    if (num_arr[i] == 3) {
        console.log("'".concat(num_arr[i], "rd'"));
    }
    else if(num_arr[i] > 3){
        console.log("'".concat(num_arr[i], "th'"));
    }
}
