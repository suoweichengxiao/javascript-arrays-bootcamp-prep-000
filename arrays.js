var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
return [element, ...array] }

function destructivelyAddElementToBeginningOfArray(array, element) {
array = array.unshift(element);
}

function addElementToEndOfArray(array, element) {
return [...array, element];}

function destructivelyAddElementToEndOfArray(array, element) {var decentArray = [1];
var element = 'foo';
decentArray.push(element);
return decentArray;
}

function accessElementInArray(array, index) {var indexArray = [1, 2, 3];
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
