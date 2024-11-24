// types:
//  build-in
//  any
//  never
//  emun
//  tuple

// buid-in-variable-types
let sales: number = 123_456_789;
let giorgi: string = "giorgi";
let bool: boolean = true;
let level;
level = 10;
level = "a";
console.log(level)

//type any 
function render(document: string){
    console.log(document);
}
render("giorg")
//arrays

let array: [any, any] = [10, "giorgi"]
let arr1 = array[0];
console.log(arr1)
console.log(array[0].__proto__);
// enums
enum Direction{
    up = 10,
    down = "giorgi",
    left = "hello",
    right = 20 
}

enum Key{
    first = 1,
    second = 10,
    third,
    fourth
}

//functions
function calculateTax(income: number){
    //let sallary;
    if(income < 50_000)
        return "its good";
    else
        return "ouu shitt"
}

//objects
let emploee = {id: 1}
console.log(emploee.id)

let emploee2: {
    readonly id: number,
    name?: string //? make it optional
} = {id: 1}

emploee2.name = "giorgi";
//emploee2.id = 3 cannot assign becouse of readonly

//we can create type aliase

type Emploee = {
    readonly id: number,
    name: string,
    retire?: (date: Date) => void
}

let worker:Emploee = {
    id: 1,
    name: "giorgi",
    retire: (date: Date) => {
        console.log(Date);
    }
} 

// union types

function KgToLbs(weight: number | srting){}
