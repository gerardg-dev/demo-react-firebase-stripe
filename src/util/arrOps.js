const isArrayValid = arr => {
  if (typeof arr === "undefined" || arr === undefined) return false;
  if (arr && arr === null) return false;
  if (arr && arr.length === 0) return false;
};

/**
 * Removes an object from by key name and value.
 * Finds object in the array by key name and value and then removes it.
 * Returns an array without the object found to remove.
 *
 * @param arr {Array} array of objects, will take off and object from it
 * @param keyName {String} Key name to find
 * @param keyVal {String, Int} Any type
 */

export const removeObjectbyKeyNameAndValue = (arr, keyName, keyVal) => {
  let arrCopy = arr;

  let arrWithRemovedData = arrCopy.filter(function(obj) {
    return obj[keyName] !== keyVal;
  });

  return arrWithRemovedData;
};

export const removeObjectbyKeyNameAndValue2 = (arr, keyName, keyVal) => {
  let arrCopy = arr;

  let arrWithRemovedData = arrCopy.splice(
    arrCopy.findIndex(({ keyName }) => keyName == keyVal),
    1
  );

  return arrWithRemovedData;
};

// returns full object
export const findObjectByKeyNameAndValue = (arr, keyName, keyVal) => {
  // // This returns the object but we havent test performance with large data
  // let obj = arr.find(o => o[keyName] === keyVal);
  // console.log("findObjectByKeyNameAndValue");
  // console.log(obj);
};
// export const findNestedObjectByKeyNameAndValue = (arr, nestedObj keyName, keyVal) => {
// };

// returns true or false
export const isObjByKeyNameAndValueFound = (arr, keyName, keyVal) => {
  if (isArrayValid === false) return false;
  // if not found, returns undefined, if found returns object
  let obj = arr.find(o => o[keyName] === keyVal);
  // console.log("isObjByKeyNameAndValueFound");
  // console.log(obj);
  if (typeof obj === "undefined" || obj === undefined) return false;
  return true;
};

export const findObjectByKeyNameAndValueAndReplaceWithNewObj = (
  arr,
  keyName,
  keyVal,
  newObj
) => {
  let arrCopy = arr;
  let obj = arrCopy.find((o, i) => {
    if (o[keyName] === keyVal) {
      // arrCopy[i] = { name: 'new string', value: 'this', other: 'that' };
      arrCopy[i] = newObj;
      return true; // stop searching
    }
  });
  // return arrCopy;
};
// export const findNestedObjectByKeyNameAndValueAndReplaceWithNewObj = (
// };

// check if string or part of it is found in an array of objects
// basically we want to know if that string is found withing a key value of an object
// returns an array with all the objects where such string or part of it was found
export const getObjectsWhereStringFoundAtKeyValue = (
  arr,
  keyName,
  strToFind
) => {
  if (isArrayValid === false) return [];

  let newArr = [];

  arr.map((e, index) => {
    var keyLowercased = e[keyName].toLowerCase();
    var keyToFindLowercased = strToFind.toLowerCase();
    if (e[keyName].includes(strToFind)) {
      newArr.push(e);
    }
  });
  return newArr;
};

export const getObjectsWhereStringFoundAtNestedObjectKeyValue = (
  arr,
  nestedObjKeyName,
  keyName,
  strToFind
) => {
  if (isArrayValid === false) return [];

  let newArr = [];

  arr.map((obj, index) => {
    var nestedObj = obj[nestedObjKeyName];
    var keyLowercased = nestedObj[keyName].toLowerCase();
    var keyToFindLowercased = strToFind.toLowerCase();
    if (nestedObj[keyName].includes(strToFind)) {
      newArr.push(obj);
    }
  });
  return newArr;
};

// export const getObjectsWhereStringFoundAtKeyName = (arr, strToFind) => {};

export const areArraysEqual = (arr1, arr2) => {
  /* WARNING: arrays must not contain {objects} or behavior may be undefined */
  return JSON.stringify(arr1) == JSON.stringify(arr2);
};

export const reverseArr = arr => arr.slice(0).reverse();

// Return index of an object by providing property unique property value
// Example, to find the index of an object with a key named ID and value 189012
// ID value is a unique indentifier
// TEST to make sure it works...
export const returnObjIndexByKeyNameAndValue = (arr, keyname) => {
  return arr.findIndex(obj => obj[keyname] === keyname);
};
