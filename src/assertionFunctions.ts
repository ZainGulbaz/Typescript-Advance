class Person{
    constructor(public name:string){
    }
}

const loadPerson=():Person|null=>{
    return null;
}

function assert(condition:unknown,message:string):asserts condition{
    if(!condition) throw new Error(message);
}

let mightBePerson= loadPerson();

assert(mightBePerson!==null,"Person is null");

console.log(mightBePerson.name);

export{}