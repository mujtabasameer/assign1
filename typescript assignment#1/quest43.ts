let magician_name1:string[]=['Jhon','Nathan','Paul','Chris'];
let great_name:string[]=magician_name1.slice();

function make_great1(name1:string[])
{
    for(let i=0;i<name1.length;i++)
    {
        name1[i]='Great '+name1[i];
    }
}

function show_magicians1(name:string[])
{
    for(let namee of name)
    {
        console.log(namee);
    }
}
make_great1(great_name);
show_magicians1(great_name);
show_magicians1(magician_name1);