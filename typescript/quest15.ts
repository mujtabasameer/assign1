let guests:string[]=['Imran khan','Muhammad Ali','Kylie Jenner'];
for(let i=0;i<3;i++)
{
    console.log('Hello '+guests[i]+'. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.')
}

console.log('Mr Ali is unable to attend the lunch.');
guests[1]='Mike Tyson';    //replacing Muhammad Ali in the array with mike tyson at index 1
for(let i=0;i<3;i++)
{
    console.log('Hello '+guests[i]+'. It is with great pleasure that we invite you to attend lunch hosted by Mr Ali tomorrow at the PC hotel in Lahore.')
}