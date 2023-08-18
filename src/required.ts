

type Required<T>={
    [Item in keyof T]-?:T[Item]
}

type Point={
    x?:number,
    y?:number
}

let point1:Point={
    x:2
}

let point2:Required<Point>={
    x:2,
    y:3
}


export {}