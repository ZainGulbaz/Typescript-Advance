type Point={
    x:number,
    y:number
}


let point:Point;

const initiatePoint=()=>{
    point={
        x:1,
        y:3
    }

}

initiatePoint();

console.log(point!.x);


export {}