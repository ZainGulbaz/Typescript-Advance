// for == typescript consider null same as undefined

const decorater=(str:string|undefined|null)=>{
    if(str==null)
    {
        return str;
    }

    return str.trim();
}

console.log(decorater("Hello                  "));
console.log(decorater(undefined));


// console.log(undefined===null);
