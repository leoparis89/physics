import './styles/styles.scss';

import * as Matter from 'matter-js';
import * as p5 from 'p5';

var s = function( sketch ) {

  var x = 100;
  var y = 100;

  sketch.setup = function() {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = function() {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};

var myp5 = new p5(s);

// // module aliases
// var Engine = Matter.Engine,
//   Render = Matter.Render,
//   World = Matter.World,
//   Bodies = Matter.Bodies;
//
// // create an engine
// var engine = Engine.create();
//
// // create a renderer
// var render = Render.create({
//   element: document.body,
//   engine: engine
// });
//
// // create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
//
// // add all of the bodies to the world
// World.add(engine.world, [boxA, boxB, ground]);
//
// // run the engine
// Engine.run(engine);
//
// // run the renderer
// Render.run(render);
