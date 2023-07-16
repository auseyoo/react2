
let name=['미미','나나']


// person1=name[0]
// person2=name[1];

let [person1,person2]=name// 배열의 구조분해 할당

console.log(person1);
console.log(person2);

//객제의 구조분해 할당
let shapes={
    shape:'',
    width:100,
    height:200
}
let {shape='circle',width:w,height:h}=shapes // 객체

console.log(shape);
console.log(w);
console.log(h);


