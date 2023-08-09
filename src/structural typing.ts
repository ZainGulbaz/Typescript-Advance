//In typescript for Types Only structure matters

type Point={
    id:string
}

type Point2={
    id:string
}

let point:Point={
    id:"sdasdadsa"
}

let point2:Point2={
    id:"xczxcxcsxczx"
}

point=point2;

// if a type1 has all the variables of type2 then it could be same but not true if vice versa


type Product={
    id:number,
    name:string
}

type Order={
    id:number,
    name:string,
    productId:number
}


let product:Product={
    id:1,
    name:"Laptop"
}

let order:Order={
    id:1,
    name:"Zains order",
    productId:1
}


order=product; //Error
product=order; //No Error