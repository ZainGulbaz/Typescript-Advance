
type PartialCustom<T>={
    [Item in keyof T]?:T[Item]
}

class State<T>{
    constructor(public current:T){}

    update(newState:Partial<T>){
        this.current={...this.current,...newState};
    }
}



let data= new State({
    name:"Zain",
    age:25
})

data.update({
    name:"Irtaza"
})
console.log(data.current);

export{}