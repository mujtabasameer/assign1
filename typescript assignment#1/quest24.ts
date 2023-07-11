let str='Ali';
console.log('String :'+str);
console.log('Is str == "Ali" | predict true');
console.log('Is str != "Ali" | predict false');

let uppercase_str="ANIMAL";
console.log('Uppercase string :'+uppercase_str);
let lowercase_string=uppercase_str.toLowerCase();
console.log('Is uppercase_str == "animal" | predict false');
console.log('Is uppercase_str != "animal" | predict true');
console.log('Is lowercase_str == "animal" | predict true');
console.log('Is lowercase_str != "animal" | predict false');

let num1=10;
let num2=15;
console.log('Is num1==10 && num2==15 | predict true');
console.log('Is num1==10 && num2==14 | predict false');
console.log('Is num1==10 || num2==13 | predict true');
console.log('Is num1==11 || num2==12 | predict false');

let arr:number[]=[1,4,8,];
let numm:number=4;
if(arr.includes(numm))
{
    console.log('true');
}
else
{
    console.log('false');
}

numm=3;
if(arr.includes(numm))
{
    console.log('true');
}
else
{
    console.log('false');
}