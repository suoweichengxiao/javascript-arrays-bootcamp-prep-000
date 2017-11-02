var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
return [element, ...array] }

function destructivelyAddElementToBeginningOfArray(array, element) {
return array = array.unshift(element);
}

function addElementToEndOfArray(array, element) {
return [...array, element];}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
return array;
}

function accessElementInArray(array, index) {
return indexArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {var averageArray = [1, 2, 3]
averageArray.shift();
return averageArray;
}

function removeElementFromBeginningOfArray(array) {var sliceArray = [1, 2, 3];
return sliceArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {var popArray = [1, 2, 3];
popArray.pop();
return popArray;
}

function removeElementFromEndOfArray(array) {var sliceArray2 = [1, 2, 3];
return sliceArray2.slice(0, sliceArray2.length, -1);}
