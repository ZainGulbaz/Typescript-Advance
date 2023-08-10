//Assetion is the method to tell the tsc that we know better about the type of variable

function load(str:unknown)
{
    return str;
}

let hello=load("here");

(hello as string).trim();

(<string> hello).trim(); //not recommended as it does not work for tsx files