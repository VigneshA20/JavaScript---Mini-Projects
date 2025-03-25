// FUNCTIONS - performs specific task can be 
//             multiple times optionally takes input as 
//             parameters and optionally returns value.




// function declaration
function isPositive(num) //paramaters
{
    return num > 0;
}

console.log(isPositive(1))// arguments
console.log(isPositive(-1))



function sayHello()
{
    console.log("Hello");
}
sayHello()




console.log(findProduct(2,5))// hoisting


function findProduct(a, b)
{
    return a * b;
}


console.log(findProduct)

console.log(typeof findProduct)






//default parameters

// function greet(name = 'there')
// {
//     console.log("hi", name);
// }
// greet("vignesh")
// greet()





// Recursive function

function factorial(n)
{
    if(n == 1)
        return 1;
   return n * factorial(n-1);

}
console.log(factorial(5))






// function expression
// hoisting is not working in fn expression

let a =100

let isEven = function(num)
{
    return num%2==0;
}

console.log(isEven(24))
console.log(isEven)




let arr =[1,2,3,4,5]

let findSum = function(arr)
{
    let sum =0

    for(let val of arr)
    {
        sum += val;
    }
    return sum
}
console.log(findSum(arr))





// arrow function

let volume = (l, b, h) => l * b * h;

console.log(volume(1,2,3))




let findsum = arr => {
    let sum = 0;
    for(let val of arr)
    {
        sum += val;
    }
    return sum;
}

console.log(findsum(arr))




let area = r => Math.PI*r*r;

console.log(area(5));


console.clear()






// variable arguments

// let sumOfDigits = function(...args)
// {
//     let sum =0;
//     for(let val of args)
//     {
//         sum += val;

//     }
//     return sum;
    
// }
// console.log(sumOfDigits(1,2,3,4))





// let sumOfDigits = (...args) =>
// {
//     let sum = 0;

//     for(let val of args)
//     {
//         sum += val;
//     }
//     return sum;

// }

// console.log(sumOfDigits(1,2,3,4,5,6,7,8,9))




















//arguments
// but here is not working 
// may be work in browser console

// let sumOfDigits = () =>
// {
//     for(let val of arguments)
//     {
//         console.log(val);
//     }
// }
// sumOfDigits(1,2,3,4,5,6,7,8,9)






// Generators - generate value by one

function* indexGenerator()
{
    let index = 1;

    while(true)
    {
        yield index++;
    }
}

const gen = indexGenerator();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)











// Callback

function greetConsole(name)
{
    console.log("HI,", name);
}



function greetHeading(name)
{
    console.log("Hi", name);
}



function greet(callback)
{
    callback("Vignesh")
}
greet(greetConsole)
greet(greetHeading)


