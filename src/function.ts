//Function declaration
function sapa(nama:string){
    console.log("Halo, aku" + nama);
}
sapa("Yasir!")

function calculate (a:number, b:number, c:number) :number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);

//Arrow function
let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication (5,8)
console.log("hasil perkalian: "+ result);

//Latihan
let cube = function(num:number){
    return num ** 3
}
console.log(cube(3));

function greet(nama:string){
    console.log("Halo, aku" + nama);
}
sapa("izath")

// let multiply= (a:number, b:number) =>{
//     return a * b

// }
// let result = multiply (10,6)
// console.log("Hasil Perkalian: " + result);

//Object
let pers: {
    name: string,
    age: number,
    adress: string
}
pers = {
    name: "Izath",
    age: 22,
    adress: 'Balapulang'
}
console.log(pers);
