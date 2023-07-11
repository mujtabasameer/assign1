function carr(manufacturer:string,model:string,...options:any[]): object{
    let car_info:any=
    {
        manufacturer:manufacturer,
        model:model,
    };

    for(let op of options)
    {
        let [name,value]=op;
        car_info[name]=value;
    }

    return car_info;
}

console.log(carr('toyota','corolla',['Model','2022']));