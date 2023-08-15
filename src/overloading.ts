//Function overloading is only done with simple functions


function reverse(text:string):string;
function reverse(text:string[]):string[];
function reverse(text:string|string[]):string|string[]{
    
    if(typeof text =='string')
    {
        return text.split("").reverse().join("");
    }
    else{
        return text.reverse();
    }

}


reverse("Hello");