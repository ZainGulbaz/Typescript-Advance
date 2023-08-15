type NameObj={
    firstName:string,
    lastName:string
}

function addName<T extends NameObj>(obj:T):T & {fullName:string}{
    return {
        ...obj,
        fullName:`${obj.firstName} ${obj.lastName}`
    };

}

console.log(addName({lastName:"Gulbaz",firstName:"Zain"}))

export{}