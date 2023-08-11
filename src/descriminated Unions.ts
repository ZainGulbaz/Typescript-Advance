type validationSuccess={
   isValid:true,
   successMessage:string
}


type validationFailure={
    isValid:false,
    errMessage:string
}


let validation:validationFailure|validationSuccess={
    isValid:true,
    successMessage:"Here we gi again",
};

if(validation.isValid)
{
    console.log(validation.successMessage);
}
