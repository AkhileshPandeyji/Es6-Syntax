class Person{
    constructor(name,age,weight){
        this.name=name;
        this.age=age;
        this.weight=weight;
        }
    displayName()={
        return this.name;
    }
     displayAge()={
        return this.userAgent;
    }
     displayWeight()={
        return this.weight;
    }
}

let person1 = new Person('Bucky',45,677);
let person2 = new Person('Sally',45,677);

console.log(person1.displayAge());