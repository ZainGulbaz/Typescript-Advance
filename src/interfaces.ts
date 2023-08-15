//The main difference between type and interface is declaration merging

interface Point2D{
    x:number,
    y:number,
}

interface Point3D extends Point2D{
    z:number
}