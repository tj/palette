
var vbench = require('vbench')
  , palette = require('../')
  , Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas
  , ctx = canvas.getContext('2d')
  , suite = vbench.createSuite();

var img = new Image;

img.onload = function(){
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
};

img.src = __dirname + '/../examples/cat.jpg';

suite.bench('5 swatches', function(next){
  palette(canvas, 5);
  next();
});

suite.bench('10 swatches', function(next){
  palette(canvas, 10);
  next();
});

suite.bench('20 swatches', function(next){
  palette(canvas, 20);
  next();
});

suite.run();