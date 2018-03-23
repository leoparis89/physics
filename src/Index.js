import './styles/styles.scss';
import {Engine, Bodies, World} from 'matter-js';
// const p5 = require('p5');
// const myP5 = new p5();
import 'p5';

// myP5.setup = () => {//   myP5.createCanvas(640, 480)
// }
let box, engine, world;


window.setup = () => {
  createCanvas(640, 480);
  engine = Engine.create();
  world = engine.world;
  box = Bodies.rectangle(200, 100, 80, 80);
  Engine.run(engine);
  console.log(box);
  World.add(world, box);
};

window.draw = () => {
  background(52);

  rect(box.position.x, box.position.y, 80, 80);
};
