import {Bodies, World} from 'matter-js';

export class Box {
  constructor(x, y, w, h, world, options) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, options);

    World.add(world, this.body);
  }

  show() {
    const {position: {x, y}, angle} = this.body;
    push();
    rectMode(CENTER);
    translate(x, y);
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
