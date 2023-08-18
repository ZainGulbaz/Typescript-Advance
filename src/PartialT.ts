class State<T>{
    constructor(public current:T){}
    updateState(obj:Partial<T>){
        this.current={...obj,...this.current};
    }
}

type Point={
x:number, 
y:number,
z?:number
}

let mystate= new State<Point>({x:2,y:3});

mystate.updateState({z:3});

console.log(mystate.current);
export {}