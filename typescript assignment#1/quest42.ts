let magician_namee:string[]=['Jhon','Nathan','Paul','Chris'];

function make_great(name1:string[])
{
    for(let i=0;i<name1.length;i++)
    {
        name1[i]='Great '+name1[i];
    }
}

function show_magicianss(name:string[])
{
    for(let namee of name)
    {
        console.log(namee);
    }
}
show_magicianss(magician_namee);
make_great(magician_namee);
show_magicianss(magician_namee);