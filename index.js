var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, key, value);
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, key, value);
  return object;
}

function deleteFromObjectByKey(object, key) {
  var objMod = Object.assign({}, object);
  delete objMod[key];
  return objMod;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
