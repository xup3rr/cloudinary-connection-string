// cloudinary://345861234570132:D2-34ddopiV9N3edr28dV34daef@dhabtaskf
module.exports = {
  parse: (url) => {
    const api_key = url.substring(url.indexOf('//') + 2, url.lastIndexOf(':'))
    const api_secret = url.substring(url.lastIndexOf(':') + 1, url.indexOf('@'))
    const cloud_name = url.substring(url.indexOf('@') + 1)
    return { cloud_name, api_key, api_secret }
  },
  stringify: ({ cloud_name, api_key, api_secret }) => `cloudinary://${api_key}:${api_secret}@${cloud_name}`,
}
