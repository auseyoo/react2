
   function Person(name.age){
      this.name=name,
      this.age=age,
      
      this.introdude=function(){
         consolo.log(`${this.name} 은 ${this.age}살`)
      }
}
const person1=new Person('미미',20)
const person2=new Person('나나',25)
console.log(person1.introdude);
console.log(person2.name);
