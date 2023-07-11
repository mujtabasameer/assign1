let num_arr:number[]=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<num_arr.length;i++)
{
    if(num_arr[i]==1)
    {
        console.log(`'${num_arr[i]}st'`);
    }

    if(num_arr[i]==2)
    {
        console.log(`'${num_arr[i]}nd'`)
    }

    if(num_arr[i]==3)
    {
        console.log(`'${num_arr[i]}rd'`)
    }

    else if(num_arr[i]>3)
    {
        console.log(`'${num_arr[i]}th'`)
    }
}