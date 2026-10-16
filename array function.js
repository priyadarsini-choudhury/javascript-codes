let a = ['priya', 'ayushman', 'ritu', 100, 'cxdp', 'python']
console.log(a);
let b = ['choudhury', 'nayak', 'choudhury', 234]
console.log(b);
//concat add the two array in a single array
let c = a.concat(b);
console.log(c);
let d = b.concat(a);
console.log(d);
//flat function open the depth of an array
let e = ['abc', 'c programming', 'cxdp', [1, 2, 3, 4, ['mama', 'ritu', true], '100'], 'iot', 'cxdp']
console.log(e.flat());// by default it's value is 1
// join function it coverts array elements into string and placing a separator between them
let f = ['hello', 'world']
console.log(f.join());
console.log(a.join(" /"));
console.log(typeof f);
//tostring function is used for convert array elements to strings and separate by comma(,)
let g = ["priyadarsini", "choudhury"]
console.log(g);
console.log(g.toString())
console.log(g.toString(), typeof g);
// for searching purpose
//includes() it is used for search the elements if the element is present in the array it return the boolean values
let h = [1, 2, 3, 4, ['gita', 'sita', 'hari'], 2, 4, 5]
console.log(h[4].includes('sita'))
console.log(h.includes(3));
console.log(h.includes(5));
console.log(h.indexOf(4));
console.log(h.indexOf(5));
console.log(h.indexOf(2));
console.log(h[4].indexOf('hari'));
console.log(h[4].indexOf('gita'));
