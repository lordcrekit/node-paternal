/**
 * Execute series pattern on a set of functions. Each function will be run in
 *   order with no arguments. When all functions have run, cb() will be run.
 *
 * @param functions   A list of functions to be executed in the form
 *                      <code>function(cb)</code>.
 * @param cb          A callback function, will be executed after all functions
 *                      have run.
 */
function seriesPattern(functions, cb) {
  const series = function(item) {
    if (item) {
      return item(function() { series(functions.shift()) })
    } else {
      return cb()
    }
  }
  series(functions.shift())
}

module.exports = {
  seriesPattern: seriesPattern
}
