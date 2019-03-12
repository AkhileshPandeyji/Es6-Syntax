function* samplegenerator(){
    yield 'apple';
    yield 'bacon';
    console.log('Hello World!!!!!!!!');
    yield 'Ham';
}


console.log(samplegenerator().next().value);
console.log(samplegenerator().next().value);
console.log(samplegenerator().next().value);

function* samplegenerator2(){
 let id=0;
    while(id<3){
        yield id++;
    }
}

console.log(samplegenerator2().next().value);
console.log(samplegenerator2().next().value);
console.log(samplegenerator2().next().value);