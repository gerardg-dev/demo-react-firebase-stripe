export const isObjectEmpty = (myObj) => {
  // if (myObj === null || myObj === undefined) return null;
  return !Object.keys(myObj).length; // true or false
};

// const isObjectEmpty = (obj) => {
//   if (obj === null || obj === undefined) return null;
//   let ans = Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
//   return ans;
//   // if (Object.keys(obj).length === 0 && obj.constructor === Object) {
//   //   return true;
//   // };
//   // return false;
// }

export const includesKey = (obj, key) => {
  // var hasKey = "apple" in fruitPrices;
  var hasKey = key in obj;
  return hasKey;

  // var hasKey = someObject.hasOwnProperty("keyName");
  // // will return false if the property is gained through inheritance
}
