/**
 * Copyright 2017 Michigan State University
 * Distributed under the terms of the GNU General Public License (LGPL)
 *
 * @author William A. Norman <norman.william.dev@gmail.com>
 */

/**
 * Execute series pattern on a set of functions. Each function will be run in
 *   order with no arguments. When all functions have run, cb() will be run.
 *
 * @param functions   A list of functions to be executed in the form
 *                      <code>function(cb)</code>.
 * @param cb          A callback function, will be executed after all functions
 *                      have run.
 */
function seriesPattern (functions, cb) {
  const series = function (item) {
    if (item) {
      return item(function () { series(functions.shift()) })
    } else {
      return cb()
    }
  }
  series(functions.shift())
}

/**
 * Executes parallel pattern on a set of functions. Every function will be
 *  called to run in order with no arguments. When all functions have returned,
 *  cb() will be run.
 *
 * @param functions  A list of functions to be executed in the form
 *                     <code>function(cb)</code>. It should call cb(error) when
 *                     finished.
 * @param cb         A callback function, will be executed after all functions
 *                     have run.
 */
function parallelPattern (functions, cb) {
  const countT = functions.length
  let count = 0

  for (let i = 0; i < functions.length; i++) {
    const func = functions[i]
    func(function () {
      count++
      if (count >= countT) { cb() }
    })
  }
}

module.exports = {
  seriesPattern: seriesPattern,
  parallelPattern: parallelPattern
}
