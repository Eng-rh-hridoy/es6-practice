let result = myFunction(15); // here I don't give the value of num2. That's why the function will consider the value of num2 is the default value.
console.log(result);

function myFunction(num1, num2 = 20){ // 20 is the default value of num2. if in case we don't give any value for num2, then the function will give the default default value of num2.
    return num1 + num2;
}