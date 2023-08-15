type postBody={
    personal:{
        name:string,
        rollNo:string,
        location:string    
    },
    payments:{
        credentialsKey:string
    }
}

type PaymentDetails= postBody["payments"];

const workonPayments=(PaymentDetails:PaymentDetails)=>{
    console.log(PaymentDetails.credentialsKey);
}

workonPayments({credentialsKey:"sadsadsad12312321312"});