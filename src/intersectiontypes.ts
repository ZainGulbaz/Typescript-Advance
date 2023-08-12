type Person={
    name:string
}

type Email={
    email:string
}

type Phone={
    phonenumber:string
}

type Contact= Person & Email & Phone;

const contact=(contact:Contact)=>{
    console.log(`My name is ${contact.name}. My email is ${contact.email}. My phone number is ${contact.phonenumber}`);
}

contact({
    name:"Zain Gulbaz",
    phonenumber:"+923364317217",
    email:"zaingulbaz8@gmail.com"
});

export {}