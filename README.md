# defer-class
Deferred Promises as a Class

Basically `Q.defer()` using native constructs

# Install

`npm install --save defer-class`

# Usage

```js
const Defer = require('defer-class')

const deferred = new Defer

deferred.promise.then(result => console.log(result))

deferred.resolve('Hello World')
// Logs 'Hello World'
```

# API

## `new Defer`
Creates a new deferred promise with the following interface:

### `#resolve(data)`
Resolves the promise with the given data

### `#reject(error)`
Rejects the promise with the given data

### `#promise`
The underlying promise object, used for chaining & such
