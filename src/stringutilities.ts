


type Getter=`get${Capitalize<string>}`;
type Setter=`set${Capitalize<string>}`;


let getName:Getter='getName';
let setName:Setter=`setAnyThing`;