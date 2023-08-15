interface Rectangle{
    kind:"rectangle",
    width:number,
    length:number
}


interface Square{
    kind:"square",
    width:number
}

interface Circle{
    kind:"cricle",
    radius:number
}

type Shape=Rectangle|Square|Circle;


const handleShape=(shape:Shape)=>{
    
    if(shape.kind=="square")
    {
        return shape.width * shape.width;

    }
    else if(shape.kind=="rectangle")
    {
        return shape.width * shape.length;
    }
    else if(shape.kind=="cricle")
    {
        return Math.PI*shape.radius*shape.radius;
    }

    let handledAllShapes:never=shape;
}