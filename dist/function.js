"use strict";
//Function declaration
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Yasir!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
//Arrow function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("hasil perkalian: " + result);
//Latihan
let cube = function (num) {
    return Math.pow(num, 3);
};
console.log(cube(3));
function greet(nama) {
    console.log("Halo, aku" + nama);
}
sapa("izath");
// let multiplication = (a:number, b:number) =>{
//     return a * b
// }
// let result = multiplication (10,6)
// console.log("Hasil Perkalian: " + result);
//Object
let pers;
pers = {
    name: "Izath",
    age: 22,
    adress: 'Balapulang'
};
console.log(pers);
