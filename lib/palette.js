
/*!
 * palette
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var quantize = require('./quantize');

/**
 * Expose `palette`.
 */

module.exports = palette;

/**
 * Library version.
 */

exports.version = '0.0.1';

/**
 * Return the color palette for the given `canvas`
 * consisting of `n` RGB color values, defaulting to 5.
 *
 * @param {Canvas} canvas
 * @param {Number} n
 * @return {Array}
 * @api public
 */

function palette(canvas, n) {
  var ctx = canvas.getContext('2d')
    , imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    , data = imageData.data
    , len = data.length
    , n = n || 5
    , arr = [];

  for (var i = 0; i < len; i += 4) {
    // semi-transparent
    if (data[i + 3] < 0xaa) continue;
    // TODO: skip stark white
    arr.push([data[i], data[i + 1], data[i + 2]]);
  }

  return quantize(arr, n).palette();
}
