function make_shirt_new(size:string='Large',message:string='I love typescript')
{
    console.log(`Size of shirt is '${size}' and the message to be printed is '${message}'.`)
}

make_shirt_new();
make_shirt_new('medium');
make_shirt_new('small','The shirt is made out of recycled materials');
