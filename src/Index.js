import './styles/styles.scss';
import {Engine} from 'matter-js';
// const p5 = require('p5');
// const myP5 = new p5();
import 'p5';

// myP5.setup = () => {//   myP5.createCanvas(640, 480)
// }
window.setup = () => {
  createCanvas(640, 480);
  const engine = Engine.create();
};

window.draw = () => {
  background(52);
};
