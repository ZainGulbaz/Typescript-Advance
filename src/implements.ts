interface Animal{
    name:string;
    voice():void;
}


class Dog implements Animal{
    constructor(public name:string){}
    voice=()=>{
        console.log("Waaooooohhhhhh");
    }
}

class Cat implements Animal{
    constructor(public name:string){}
    voice=()=>{
        console.log("Meooooowwwwwwww");
    }
    shape=()=>{
        console.log("Round");
    }
}

let tommy= new Dog("Tommy");

console.log(tommy.name);


export {}