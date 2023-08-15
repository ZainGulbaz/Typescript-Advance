type Point2D={x:number,y:number};
type Point3D={x:number,y:number,z:number};
type Person={name:string, age:number}

let point2d:Point2D={
    x:2,
    y:3
}

let point3d:Point3D={
    x:2,
    y:3,
    z:4
}

let person:Person={name:"Zain Gulbaz",age:11}

point3d=point2d as Point3D;

//double assertion
point2d= person as unknown as Point2D;

export {}