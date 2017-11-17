var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var objMod = Object.assign({}, object);
  Object.assign(objMod, key, value);
  return objMod;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, key, value)
}

function deleteFromObjectByKey(object, key) {
  var objMod = Object.assign({}, object);
  delete objMod[key];
  return objMod;
}

function destructivelyDeleteFromObjectByKey(object, key) {

}
