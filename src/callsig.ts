type Add={
   (a:number,b:number):number,
   (a:number,b:number,c:number):number
}

const add:Add=(a:number,b:number,c?:number)=>{
    if(c!=null) return a+b+c;
    return a+b;
}


class Pointer{
    constructor(public x:number, public y:number){}
}

type Point={
    new(x:number, y:number):{x:number, y:number}
}

let point:Pointer= new Pointer(2,3);

export{}