type Person={
    name:string,
    age:number,
    city:"Sydney"|"Melbourne"|"London"
}

const john:Person={
    name:"John",
    age:25,
    city:"London"
}

function logValues<Obj,Key extends keyof Obj>(obj:Obj,key:Key){
    console.log(obj[key]);
}


logValues(john,"age");

logValues({
    country:"Pakistan",
    rank:"140"
},"rank");


function setValue<Obj,Key extends keyof Obj>(obj:Obj,key:Key,value:Obj[Key]){
    obj[key]=value;
}


setValue(john,"age",23);
console.log(john);