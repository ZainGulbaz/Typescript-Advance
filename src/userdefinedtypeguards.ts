type Square={
    width:string,
}

type Rectangle={
   width:string,
   length:string
}

type Shape=Square|Rectangle;


const isSquare=(square:Shape):square is Square=>"width" in square;


let square:Shape={
    width:"22"
}
if(isSquare(square)) console.log("Shape is square");

export {}




export {};