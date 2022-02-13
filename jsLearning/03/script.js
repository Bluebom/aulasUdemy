class Animal{
    eat(animal,food){
        console.log(`the ${animal} is eating ${food}`);
    }
}

class Dog extends Animal{
    bark(){
        console.log('auau');
    }
    eat(animal,food){
        console.log('quickly');
        super.eat(animal,food)
    }
}

let bethoween = new Dog();