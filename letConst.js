const hubby = "Elyash kanchon";
// hubby = "Jodu Khan"; /// we can't change constant value 
console.log(hubby);
const number = [20, 48];
number[1] = 88; // we can't change constant array elements;
number.push(55, 60, 72); //we can also add elements on constant array
// number = ["jodu", "modu", "kodu"]     // but we can't change hole array
console.log(number);


let baby = "Pankha Banu";
baby = "Hatpakha Banu"; // let variable is changeable
console.log(baby);

for(let i = 0; i < 10; i++){
    console.log(i);
}
// console.log(i); // here "i" is a let variable amd it's doesn't work outside of the loop