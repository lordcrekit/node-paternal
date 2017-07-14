# node-paternal
Patterns for node.js.

# Reading this document
Code previews use the same variable names as assigned in previous code previews.
For example, seriesPattern is bound to seriesP, and is later called from that.

# How do I get this set up?
1. Download it using your tool of choice
    * yarn: `yarn add node-paternal`
    * npm:  `npm install node-paternal`
    
1. Include it in your project
    ```javascript
    const paternal = require('node-paternal')
    const seriesP = paternal.seriesPattern
    ```

# What patterns are there? How do I use them?
Right now there is only series pattern.

## Series pattern
Run a set of functions in order, with a final callback. Each function must call it's callback to continue the series.
The callbacks they call are provided by seriesPattern
```javascript
let functions = []
/* add a bunch of functions, in the form function(callback) */

let cb = function() { /* code */ }

seriesP(functions, cb)
```
