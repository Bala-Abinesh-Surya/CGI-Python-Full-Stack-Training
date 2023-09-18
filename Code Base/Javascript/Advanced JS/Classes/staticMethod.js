class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        var dx = a.x - b.x;
        var dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

p1 = new Point(5, 5);
p2 = new Point(5, 5);

console.log(p1.distance); // undefined

console.log(Point.distance(p1, p2));