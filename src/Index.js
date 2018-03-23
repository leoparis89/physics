import './styles/styles.scss';
import {Engine, Bodies, World} from 'matter-js';
import 'p5';

let box, engine, world;


window.setup = () => {
  createCanvas(640, 480);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // console.log(box);
  box = new Box(50, 50, 80, 80);
};

window.draw = () => {
  background(52);
  box.show();
};

class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);
    World.add(world, this.body);
  }

  show() {
    const {position: {x, y}, angle} = this.body;
    push();
    translate(x, y);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
