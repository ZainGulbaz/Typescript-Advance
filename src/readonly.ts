//in objects

type Point={
    readonly x:number,
    y:number
}


const point:Point={
    x:2,
    y:3
}

point.y=4;

console.log(point);

//in classes


class Animal{
 
    readonly name:string 

    constructor(name:string){
        this.name=name;
    }

    // nameAnimal(name:string){
    //     this.name=name;
    // }

}


let cat = new Animal("cat");

console.log(cat.name);
// cat.name="sdadass";

export {}