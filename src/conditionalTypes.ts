type IsNumber<T>= T extends number?"number":"other";


type WithNumber=IsNumber<number>;
type WithOutNumber=IsNumber<string>;

const val:WithOutNumber="other";
const val2:WithNumber="number";


