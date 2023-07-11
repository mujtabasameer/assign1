let usernamee:string[]=['admin','jhon','nolan','chris','james'];

for(let i=0;i<usernamee.length;i++)
{
    if(usernamee[i]=='admin')
    {
        console.log('Hello admin, would you like to see a status report?');
    }

    if(usernamee[i]!='admin')
    {
        console.log('Hello '+usernamee[i]+', thank you for logging in again.');
    }
}
usernamee=[];

if(usernamee.length==0)
{
    console.log('we need to find some users')
}
