"use strict";
let sales = 123456789;
let giorgi = "giorgi";
let bool = true;
let level;
level = 10;
level = "a";
console.log(level);
function render(document) {
    console.log(document);
}
render("giorg");
let array = [10, "giorgi"];
let arr1 = array[0];
console.log(arr1);
console.log(array[0].__proto__);
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 10] = "up";
    Direction["down"] = "giorgi";
    Direction["left"] = "hello";
    Direction[Direction["right"] = 20] = "right";
})(Direction || (Direction = {}));
var Key;
(function (Key) {
    Key[Key["first"] = 1] = "first";
    Key[Key["second"] = 10] = "second";
    Key[Key["third"] = 11] = "third";
    Key[Key["fourth"] = 12] = "fourth";
})(Key || (Key = {}));
function calculateTax(income) {
    if (income < 50000)
        return "its good";
    else
        return "ouu shitt";
}
let emploee = { id: 1 };
console.log(emploee.id);
let emploee2 = { id: 1 };
emploee2.name = "giorgi";
//# sourceMappingURL=index.js.map