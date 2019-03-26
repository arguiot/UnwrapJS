# UnwrapJS
Safely unwrap optionnal values. It's very tiny module that checks if a value can safely be used
```js
const { unwrap } = require("unwrap.js")

unwrap(undefinedObject) // {}
unwrap(undefinedObject, []) // []

obj = ["hello"]
unwrap(obj) // ["hello"]
```
