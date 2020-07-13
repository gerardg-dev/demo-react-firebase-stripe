// add notes here:
// Callable Functions
// Are similar to HTTP Functions, but they have some kind of magic
// that makes it easy to authenticate users on the backend
// They make it easy to work with an external API,
// normal API flow:
// 1 - Get an authentication token in the front end
// 2 - Set it as a header
// 3 - Decode that header in the backend
// 4 - And then finally send the request off to the 3rd party API

// Encoded
// yeJshd1ImjHSnsks.wewkkskKKSKJS.sdsj324jejw

// Decoded
// HEADER
// {
//   "alg": "HS256",
//   "typ": "JWT"
// }

// PAYLOAD:
// {
//   "sub": "1234567890",
//   "name": "John Doe",
//   "admin": true
// }

// VERIFY SIGNATURE
// HMACSHA256(
//   base64UrlEncode(header) + "." +
//   base64UrlEncode(payload),
//   secret
// ) secret base64 encoded

// That is how API authentication works in most platforms
// But callable functions do all this stuff for us

// Using the Firebase SDK we dont need to set headers
// The Authentication Context helps with this
// Instead of using any other fetch, we will use the Firebase SDK
