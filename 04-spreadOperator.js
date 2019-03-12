function f1(a,b,c){
    
    console.log(a+b+c);
}


let r=[4,5,6];

f1(arr[0],arr[1],arr[2]);


f1(...arr);


const arr2=['food1','food2','food3'];
const arr3=['drink1',...arr2,'drink2'];

console.log(arr3);