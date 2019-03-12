class Person{
    constructor(name,age,weight){
        this.name=name;
        this.age=age;
        this.weight=weight;
        }
    displayName(){
        return this.name;
    }
     displayAge(){
        return this.userAgent;
    }
     displayWeight(){
        return this.weight;
    }
}

class Programmer extends Person{
    constructor(name,age,weight,language){
        super(name,age,weight);
        this.language=language;
    }
    displayLanguage(){
        return this.language;
    }
}
let person1 = new Person('Bucky',45,677);
let person2 = new Programmer('Sally',45,677,'javascript');

console.log(person1.displayAge());
console.log(person2.displayLanguage());