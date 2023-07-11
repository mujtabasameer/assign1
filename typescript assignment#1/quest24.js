var str = 'Ali';
console.log('String :' + str);
console.log('Is str == "Ali" | predict true');
console.log('Is str != "Ali" | predict false');
var uppercase_str = "ANIMAL";
console.log('Uppercase string :' + uppercase_str);
var lowercase_string = uppercase_str.toLowerCase();
console.log('Is uppercase_str == "animal" | predict false');
console.log('Is uppercase_str != "animal" | predict true');
console.log('Is lowercase_str == "animal" | predict true');
console.log('Is lowercase_str != "animal" | predict false');
var num1 = 10;
var num2 = 15;
console.log('Is num1==10 && num2==15 | predict true');
console.log('Is num1==10 && num2==14 | predict false');
console.log('Is num1==10 || num2==13 | predict true');
console.log('Is num1==11 || num2==12 | predict false');
var arr = [1, 4, 8,];
var numm = 4;
if (arr.includes(numm)) {
    console.log('true');
}
else {
    console.log('false');
}
numm = 3;
if (arr.includes(numm)) {
    console.log('true');
}
else {
    console.log('false');
}
