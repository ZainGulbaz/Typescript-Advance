class Point{
    x!:number;
    y!:number;
    constructor()
    {
        this.moveRandom();
    }
    moveRandom=()=>{
          this.x=Math.random();
          this.y=Math.random();
    }
}

let point:Point= new Point();

console.log(point.x);
console.log(point.y);