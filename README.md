### Functions for dealing with a Cloudinary connection string

[![NPM](https://nodei.co/npm/cloudinary-connection-string.png?compact=true)](https://nodei.co/npm/cloudinary-connection-string/)

Based on [pg-connection-string](https://www.npmjs.com/package/pg-connection-string) for faster productivity.

Avoid 3 separate env vars.

### Usage

```
const parse = require('cloudinary-connection-string').parse
const config = parse("cloudinary://345861234570132:D2-34ddopiV9N3edr28dV34daef@dhabtaskf") // env var

console.log(config)

// {
//   cloud_name: "dhabtaskf"
//   api_key: "345861234570132"
//   api_secret: "D2-34ddopiV9N3edr28dV34daef"
// }

// cloudinary.config(config)
```

```
const stringify = require('cloudinary-connection-string').stringify
const cloudinaryString = stringify(cloud_name, api_key, api_secret)
```

### Test

Uncomment test/index.js file and test it

```
yarn add -D mocha chai
mocha test
```
