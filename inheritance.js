class FatherSurName{
    constructor(){
        this.surName = "Schwerznegger";
    }
}
class Child extends FatherSurName{     // inheritance
    constructor(name){
        super();
        this.Name = name;
    }
}
// inheritance can connect two class and extend them for use each other property

const baby = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby);
console.log(baby2);