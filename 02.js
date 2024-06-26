// 구조분해할당 : Destructuring

// 배열이나, 객체의 속성

//1_ 배열의 경우
/*
let [value1, value2] = [1, "new"];
console.log("1", value1);
console.log("2", value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d] = arr; // 초기값

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2) 객체인 경우
let user = {
    name: "abc",
    age: 30
};

// 구조분해할당
let { name, age } = {
    name: "abc",
    age: 30
};

console.log;("name => ", name) // string
console.log("age => ", age); // number
*/
// 새로운 이름으로 할당
let user = {
    name: "abc",
    age: 30
};

// let {
//    name: newname,
//    age: newage
//} = user;

// console.log;("newname => ", newname); // string
// console.log("newage => ", newage); // number

let { name, age, birthday } = user;
console.log(name);
console.log(age);
console.log(birthday);
