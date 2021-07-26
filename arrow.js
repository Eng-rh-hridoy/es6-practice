const square = (x) => x * 2; // single statement arrow function can do within a single line
const add = (x, y) => x + y;
const doMath = (x, y) =>{   // multiple statement used second bracket
    const sum = x + y;
    const sub = x - y;
    return sum * sub;
}


const result1 = square(50);
const result2 = add(20, 30);
const result3 = doMath(7, 5);
console.log(result1);
console.log(result2);
console.log(result3);