var guests1 = ['Imran khan', 'Muhammad Ali', 'Kylie Jenner'];
for (var i = 0; i < 3; i++) {
    console.log('Hello ' + guests1[i] + '. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.');
}
console.log('Mr Ali is unable to attend the lunch.');
guests1[1] = 'Mike Tyson'; //replacing Muhammad Ali in the array with mike tyson at index 1
for (var i = 0; i < 3; i++) {
    console.log('Hello ' + guests1[i] + '. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.');
}
console.log('This is to inform you all that more guests can be invited.');
guests1.splice(0, 0, 'Denzel Washington');
var mid = guests1.length / 2;
guests1.splice(mid, 0, 'Emma Watson');
guests1.push('Michal Jordan');
for (var i = 0; i < guests1.length; i++) {
    console.log('Hello ' + guests1[i] + '. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.');
}
