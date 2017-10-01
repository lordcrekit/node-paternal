const assert = require('assert')
const paternal = require('../index.js')

describe('Patterns', function () {
  describe('#seriesPattern(functions, cb)', function () {
    it('Should run every function in order, then the callback', function (done) {
      let functions = []
      let count = 0
      for (let i = 0; i < 6; i++) {
        functions.push(function (cb) {
          setTimeout(function () {
            count++
            cb(null)
          }, 125)
        })
      }
      let callback = function () {
        assert.equal(count, 6)
        done()
      }

      // Execute seriesPattern
      paternal.seriesPattern(functions, callback)
    })
  })

  describe('#parallelPattern(functions, cb)', function () {
    it('Should run every function, then the callback', function (done) {
      let functions = []
      let count = 0
      for (let i = 0; i < 6; i++) {
        functions.push(function (cb) {
          setTimeout(function () {
            count++
            cb(null)
          }, 500)
        })
      }
      let callback = function () {
        assert.equal(count, 6)
        done()
      }

      // Execute seriesPattern
      paternal.parallelPattern(functions, callback)
    })
  })
})
