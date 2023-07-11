let current_users:string[]=['john', 'alice', 'bob', 'jane', 'alex'];
let new_users:string[] = ['mary', 'john', 'steve', 'ALEX', 'sam'];

let current_users_lowercase:string[]=current_users.map((strr) => strr.toLowerCase());
let new_users_lowercase:string[]=new_users.map((strr) => strr.toLowerCase());

for(let new_user of new_users_lowercase)
{
    let username_taken=current_users_lowercase.includes(new_user);
    if(username_taken)
    {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    }
    else
    {
        console.log(`Username '${new_user}' is available`);
    }
}

