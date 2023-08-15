interface Request{
    body:any
}

interface Request{
    json:string
}

const API=(req:Request)=>{
    console.log(req.body);
    console.log(JSON.parse(req.json));
}


API({body:{
    type:"GET"
},
json:'"{name":"zain gulbaz","rollNo:11"}"'});


export{}