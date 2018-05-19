var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array, element) {
  var beginArray = [`${element}`, ...array];
  return beginArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
  return array
}

function addElementToEndOfArray(array, element) {
  var endArray = [...array, `${element}`];
  return endArray
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(`${element}`);
  return array
}

function accessElementInArray(array, index) {
  return array[`${index}`]
}

function destructivelyRemoveElementFromBeginningOfArray(element) {
  array.shift(`${element}`)
  return array
}