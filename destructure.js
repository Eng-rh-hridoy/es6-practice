const person = {
    name: "Jacky Mong",
    Age: 23,
    Phone: 1788521450,
    Address: "Rangamati",
    gfName: "Zemii Mong"
}

// const Name = person.name;
// const age = person.Age;
// const add = person.Address;
// console.log(Name);
// console.log(age);
// console.log(add);

// console.log(preson.name);
// console.log(preson.Phone);
// console.log(preson.gfName);

const { name, Age, Phone, Address, gfName } = person; // Destructure the object
console.log(name);
console.log(Phone);
console.log(gfName);