const ages1 = [12, 15, 17, 14];
const ages2 = [13, 18, 15];
const ages3 = [17, 13, 19, 12];
const newAges = ages1.concat(ages2).concat(ages3); // we do previously concat array
const allAges = [...ages1, ...ages2, ...ages3]; // now we can smartly add arrays by 3dots.It's spread items
// console.log(newAges);
console.log(allAges);

const montri = 350;
const sochib = 280;
const business = 650;
const maximum = Math.max(montri, sochib, business); // previously we get the maximum number bt Math.max() function and we pass numbers as a parameter.
// console.log(maximum);
// If number are into an array then how we can pass them as a parameter??
const number = [350, 280, 650, 800, 120, 480]; // montri, sochib, business and sooo on......
const bigBoss = Math.max(...number);
console.log(bigBoss);