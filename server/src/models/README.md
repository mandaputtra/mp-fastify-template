# How to create model

Please make sure your model is correct and thats likely to be easy to debug or query.
Think again before creating model. Be consistent on the data on model is okay to had empty field, but
make sure to set the default.

Model naming format are [name].model.js, other than that you cant usemodel by just

```js
const { modelname } = require('../../models')
```
because index.js read by file name.
