// // for() , while() , do-while






// let index;
// for(index=1; index<=5; index++)
// {
//     console.log(index);
// }
// console.log(index);




// for(index=5; index>=0; index--)
// {
//     console.log(index);
// }




// let index = 1
// while(index <= 10)
// {
//     console.log(index);
//     index++;
// }





let index =10

while(index > 1)
{
    console.log(index)
    index--;
}




// for of

let arr= [1,2,3,4,5,6,7]

for(let val of arr)
{
    console.log(val);
}


// for in

let obj = {
    name : "Vignesh",
    dept : "IT",
    salary : 123456
}

for(let key in obj)
{
    console.log(obj[key])
}





// forEach


let arr1 = ['deepa', 'aruna', 'vandhana']

// arr1.forEach(print)

// function print(arr1)
// {
//     console.log(arr1);

// }


arr1.forEach((val) => console.log(val))
