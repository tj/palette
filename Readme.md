
# Palette

  Image color palette extraction with node-canvas for [node.js](http://nodejs.org);

  ![image color palette example](http://f.cl.ly/items/3i0v0u251O3D0M020e20/Grab.png)

## Installation

```
$ npm install palette
```

## API

 Palette's public API consists of a single function, the one returned by `require()`. This function accepts the `canvas` you wish to compute a color palette for, and an optional number of samples defaulting to `5`.

 The following example is taken from the `./test` script, showing you how you may re-draw the palette onto the original canvas, however it is of course possible to save these values in a database etc.

```js
var colors = palette(canvas, 10);
colors.forEach(function(color){
  var r = color[0]
    , g = color[1]
    , b = color[2]
    , val = r << 16 | g << 8 | b
    , str = '#' + val.toString(16);

  ctx.fillStyle = str;
  ctx.fillRect(x += 31, canvas.height - 40, 30, 30);
});
```

### Running the examples

```
$ ./test examples/cat.jpg && open /tmp/out.png
```

 ![learnboost](http://f.cl.ly/items/3K3C1Z1006083Q00231q/Grab.png)

## License 

(The MIT License)

Copyright (c) 2011 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.