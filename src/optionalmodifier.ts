type Person={
    name:string,
    rollNo?:string
}

let zain:Person={
    name:"zain gulbaz"
}

class Animal{
    name?:string;
    age?:number;
}

let dogy= new Animal();

console.log(dogy.name);