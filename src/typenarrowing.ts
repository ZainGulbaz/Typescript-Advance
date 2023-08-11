//We cannnot use type of with classes and we have to use instaces of class this concept is called typenarrowing

class Dog{

    bark=()=>{
      console.log("wooh");
    }
}

class Cat{
    meow=()=>{
        console.log("meow");
    }
}


function myFunc(animal:Dog|Cat){
    if(animal instanceof Dog)
    {
        animal.bark();

    }
    else if(animal instanceof Cat){
        animal.meow();

    }

}


let dog= new Dog();

myFunc(dog);


//Example 2


type Square={
    width:number;
}

type Rectangle={
    width:number;
    height:number;
}


const showShape=(geometry:Square|Rectangle)=>{
    
    if("height" in geometry)
    {
         console.log("Rectangle");
    }
    else if("width" in geometry)
    {
         console.log("Square");
    }

}


showShape({width:100})