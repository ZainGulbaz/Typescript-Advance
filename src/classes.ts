//In classes we can have private,protected or public properties/methods

class Animal{
    protected name:string;
    constructor(name:string){
        this.name=name;
    }
    move(distance:number):void{
        console.log(`The animal ${this.name} moved by ${distance}`);
    }
}

class Bird extends Animal{
    fly(distance:number):void{
        console.log(`The bird${this.name} flew by ${distance}`);
    }
}

let dog:Animal= new Animal("Dog");
dog.move(2);

let sparrow:Bird= new Bird("Sparrow");
sparrow.move(3);
sparrow.move(10);