type Point={
    x:number,
    y:number,
    z:number
}

// type ReadOnly={
//    readonly [Item in keyof Point]:Point[Item]
// }

type ReadOnlyGeneric<T>={
    readonly [Item in keyof T]:T[Item]
}


const point1:ReadOnlyGeneric<Point>={
    x:2,
    y:3,
    z:3
}

point1.x=2;

const point2:Readonly<Point>={
    x:0,
    y:7,
    z:-1
}

point2.z=3;

export {}