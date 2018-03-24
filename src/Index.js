import './styles/styles.scss';
import {Engine} from 'matter-js';
import 'p5';
import {Box} from './components/Box';

let engine, world, ground, boxes=[];


window.setup = () => {
  createCanvas(640, 480);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Box(320,480, 640, 50, world, {isStatic:true});
};

window.draw = () => {
  background(52);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
};

window.addEventListener('mousedown', ({x, y}) => {
  boxes.push(new Box(x, y, random(10, 40), random(10, 40), world, {friction: 0, restitution: 1}));
});
