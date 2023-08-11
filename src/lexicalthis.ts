//In Typescript for normal functions this is context bases but for arrow functions this is lexical context

//Example 1:

class Cal{
    num:number;
    constructor(num:number=0)
    {
        this.num=num;
    }

    add(){
        this.num++;
    }

    getNum():number{
        return this.num;
    }
}

let c1:Cal= new Cal();
let newFunc= c1.add;
// newFunc();


//Example 2:

class Cal2{
    num:number;
    constructor(num:number)
    {
        this.num = num;
    }
    add=()=>{
        this.num++;
    }
}

let c2= new Cal2(0);
c2.add();
console.log(c2.num);