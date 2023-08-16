type NotNullUndefines<T>= T extends null|undefined ? never:T;

type NotEmpty= NotNullUndefines<null>;
type NotEmptyNotNull= NotNullUndefines<string>;


function returnSomethingGood<T>(val:NotNullUndefines<T>):NotNullUndefines<T>{
    return val;
}


console.log(returnSomethingGood<number>(2));