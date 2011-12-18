
/*!
 * palette
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

module.exports = palette;

/**
 * Library version.
 */

exports.version = '0.0.1';

/**
 * Return the color palette for the given `canvas`.
 *
 * @param {Canvas} canvas
 * @return {Array}
 * @api public
 */

function palette(canvas) {
  var ctx = canvas.getContext('2d')
    , imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    , data = imageData.data
    , pixels = data.length / 4;

  console.log(pixels);
}