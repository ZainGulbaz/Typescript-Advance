type Point=readonly [number,number];

const move=(point:Point, x:number, y:number)=>[point[0]+x, point[1]+y];

let point:Point=[0,0];
console.log(move(point,2,3));
console.log(point);




export {};