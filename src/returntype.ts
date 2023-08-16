function giveData(name:string,lastName:string){
    return{
        name,
        lastName,
        fullName:name+" "+lastName
    }
}


function logData(person:ReturnType<typeof giveData>){
  
    console.log(person.name,person.lastName,person.fullName);

}

export{}