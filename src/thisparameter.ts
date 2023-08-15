function double(this:{value:number}){this.value= this.value* this.value;}

const computations={
    value:2,
    double
}

computations.double();
computations.double();
console.log(computations.value);