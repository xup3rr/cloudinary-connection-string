Functions for dealing with a Cloudinary connection string

Based on [pg-connection-string](https://www.npmjs.com/package/pg-connection-string) for faster productivity

Avoid 3 separate env vars

### Usage

```
const parse = require('cloudinary-connection-string').parse
const config = parse("cloudinary://345861234570132:D2-34ddopiV9N3edr28dV34daef@dhabtaskf") //env var

console.log(config)

//{
//  KEY: '345861234570132',
//  SECRET: 'D2-34ddopiV9N3edr28dV34daef',
//  NAME: 'dhabtaskf'
//}
```

```
const stringify = require('cloudinary-connection-string').stringify
const cloudinayString = stringify(KEY, SECRET, NAME)
```

### Test

Uncomment test/index.js file and test it

```
yarn add -D mocha chai
mocha test
```
