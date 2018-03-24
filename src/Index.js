import './styles/styles.scss';
import {Engine, Bodies, World} from 'matter-js';
import 'p5';

let box, engine, world, ground, boxes=[];


window.setup = () => {
  createCanvas(640, 480);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // console.log(box);
  // box = new Box(50, 50, 80, 80);
  ground = Bodies.rectangle(320,480, 640, 20, {isStatic:true});
  World.add(world, ground);
};

window.draw = () => {
  background(52);
  // box.show();
  for (let box of boxes) {
    box.show();
  }
};

window.addEventListener('mousedown', ({x, y}) => {
  // debugger
  boxes.push(new Box(x, y, random(10, 40), random(10, 40)));
});

class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);
    this.body.friction = 0;
    this.body.restitution = 1;
    World.add(world, this.body);
  }

  show() {
    const {position: {x, y}, angle} = this.body;
    push();
    translate(x, y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(255);
    fill(127)
    rect(0, 0, this.w, this.h);
    pop();
  }
}
