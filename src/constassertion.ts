type Direction={
   readonly pole:"North"|"South",
    readonly coordinates:[number,number]
}

const getDetails=(props:Direction)=>{
    console.log(props);
}

const props:Direction={
    pole:"North",
    coordinates:[1.2323,132112]
} ;

getDetails(props);


const immutableObj={
    name:"Zain",
    rollNo:11
} as const;



