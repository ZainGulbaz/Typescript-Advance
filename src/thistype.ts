

type Methods={
    double():void,
    triple():void
}


const methods:Methods & ThisType<{value:number}>={
    double:function(){
        return this.value*=2;
    },
    triple:function(){
        return this.value*=3;
    }
}

const obj={
    values:3,
    ...methods
}

console.log(obj.double());
console.log(obj.triple());