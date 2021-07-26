const person = {
    Name: "Jacky Mong",
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

// console.log(person.name);
// console.log(person.Phone);
// console.log(person.gfName);

const { Name, Age, Phone, Address, gfName } = person; // Destructure the object
console.log(Name);
console.log(Phone);
console.log(gfName);