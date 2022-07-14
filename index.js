// cloudinary://345861234570132:D2-34ddopiV9N3edr28dV34daef@dhabtaskf
module.exports = {
  parse: (url) => {
    const KEY = url.substring(url.indexOf('//') + 2, url.lastIndexOf(':'))
    const SECRET = url.substring(url.lastIndexOf(':') + 1, url.indexOf('@'))
    const NAME = url.substring(url.indexOf('@') + 1)
    return { KEY, SECRET, NAME }
  },
  stringify: (KEY, SECRET, NAME) => `cloudinary://${KEY}:${SECRET}@${NAME}`
}

