var guests2 = ['Imran khan', 'Muhammad Ali', 'Kylie Jenner'];
for (var i = 0; i < 3; i++) {
    console.log('Hello ' + guests2[i] + '. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.');
}
console.log('Mr Ali is unable to attend the lunch.');
guests2[1] = 'Mike Tyson'; //replacing Muhammad Ali in the array with mike tyson at index 1
for (var i = 0; i < 3; i++) {
    console.log('Hello ' + guests2[i] + '. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.');
}
console.log('This is to inform you all that more guests can be invited.');
guests2.splice(0, 0, 'Denzel Washington');
var mid1 = guests2.length / 2;
guests2.splice(mid1, 0, 'Emma Watson');
guests2.push('Michal Jordan');
for (var i = 0; i < guests2.length; i++) {
    console.log('Hello ' + guests2[i] + '. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.');
}
console.log('We can only invite 2 people due to unseen errors.');
var lenghth = guests2.length;
while (lenghth != 2) {
    var temp = guests2.pop();
    console.log('sorry ' + temp + '. You are uninvited due to unseen error.');
    lenghth--;
}
guests2.pop();
guests2.pop();
for (var i = 0; i < guests2.length; i++) {
    console.log('This message will not printed if the array is not empty.');
}
