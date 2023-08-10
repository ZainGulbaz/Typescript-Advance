//Generics are code tempelates that helps us to write reuseable code


class Queue<T>{

    queue:T[];
    constructor(){
        this.queue=[];
    }

    push(data:T):void{
        this.queue.push(data);
    }

    pop():T|undefined{
        return this.queue.pop();
    }
}


let q1:Queue<number|string>=new Queue<number|string>();
q1.push(4);
q1.push(9);
q1.push("Hello");