let anyType:any="Hello";
anyType=222;
console.log(anyType.name.rollNo.bye);


let unknownType:unknown="bye";
unknownType=23231;

if(unknownType)unknownType.roll;