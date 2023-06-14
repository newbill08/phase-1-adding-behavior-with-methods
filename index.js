// Your code here

class Cat {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;

    }
     //... Method
    speak(){
        //console.log(`${this.name} says meow!`)
        return `${this.name} says meow!`
    }
  }
  
  class Dog {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;

    }
    //... Method
    speak(){
        return `${this.name} says woof!`
    }
  }
  
  class Bird {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;

    }
    //... Method
    speak(){
        if(this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`
        } else{
            return `${this.name} says squawk!`
        }
        
    }
  }