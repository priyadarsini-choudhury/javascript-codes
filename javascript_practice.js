// variables
// var
var a = 30
console.log(a)
var a = 50
console.log(a)

// const 
const b = 29;
console.log(b)
/*const b = 70;
console.log(b)*/ // it show erroe

//let
let c = 50;
console.log(c)
let d = 70;
console.log(d)
// we cannot redecalre in the let keyword

//data types
// a.primitive type data
// string example
const name = 'mama'
console.log(name)
const name1 = "priya"
console.log(name1)
const name2 = (`the names are ${name} and ${name1}`)
console.log(name2)
// number
let num = 3
console.log(num)
console.log(typeof num)
const n = 40.78
console.log(n, typeof n)
//boolean type
const datacheck = true
console.log(datacheck, typeof datacheck)
const datauncheck = false
console.log(datauncheck, typeof datauncheck)
//undefined
let name3;
console.log(name3)
//null
const number = null
console.log(number, typeof number)

//use_defined datatypes
//array
let arr = []
console.log(arr, typeof arr);
let age = [10, 20, 30, 40]
console.log(age, typeof age)
let about = [10, 20, 'mama', true]
console.log(about, typeof about)
let add = [10, 'world', ['xyz', 78, 'hello', [32, 90, 78], 6, 8, 9], 'helloworld']
console.log(add[2][3][2])//print 78
//object
const students = {
    first_name: 'priyadarsini',
    last_name: 'choudhury',
    class: 'mca'

}
console.log(students, typeof students)
console.log(students.first_name)
console.log(students.last_name)
console.log(students.class)
// question
let stud = {
    regno: 100,
    name: 'priya'
}
stud.address = 'bbsr'
stud.phone_num = '8814498907'
stud.location = ['jatani', 'bhubaneswar']
pincode = [{
    current: 5788,
    permanent: 67899
}]
console.log(stud)
console.log(stud.location[1])
console.log(pincode)
console.log(pincode[0].current)
// operators
//assignment 
const ass = 4;
console.log(ass)
//logical
const x = 5, y = 3;
if (x < 6 && y < 5);
console.log("my world")
// string operator
console.log('hello' + 'world')
console.log(89 + "my_number")
console.log(890 - "my number")
console.log(46436 * 'this is the number')
let sub = 'javascript'
sub += " tutioral"
console.log(sub)
//FUNCTION
// function declaration
function add1() {
    console.log('my name is priyadarsini')
}
add1()
// function expresssion
let xy = function add1() {
    console.log('i currently pursuing my mca in cutm')

}
xy()
// arrow function
let login = () =>
    console.log("my age is 20")
login()
// types of function
//pure function
function add2(a, b) {
    console.log(a + b)
}
add2(3, 5)
add2(3, 5)
// impure function
let value = 20
function add3(a) {
    console.log(a + value)
    value++

}
add3(10)
add3(10)
add3(10)
// higher order
function show(a, b, c) {
    console.log(c)
    c(7, 8)

}
function display(x, y, z) {
    console.log(x + y)
}
show(2, 4, display)
/* //iife
(() => {
    console.log("hello");
})()*/
//what is method ?
// when a function is associated with an object is know as method.
// let try some different method of an array
let v=['apple','book','pen',100,true,'c programming','cxdp']
console.log(v);
console.log(v.length);// it return the numbers of  a elements
v.push("python","iot");// add the elements in the last of an array
console.log(v)
v.pop();// delete the last elements in the array
console.log(v);
v.unshift("students","teachers")// add elements in the first of the array
console.log(v);
v.shift()// remove the elemnts from the first postion of the array
console.log(v);
let r=v.slice(3,7)//it extract the part of the array with out changing the parent array
console.log(v);
console.log(r);
let t=v.splice(2,6)// remove the elements from the desired location of the array and change the parent array
console.log(v);
console.log(t);
