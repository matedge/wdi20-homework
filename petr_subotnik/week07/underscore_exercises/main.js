// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
// var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
//
// var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
// Create an array of every five numbers between 30 and 101
// Turn bumpyArr into one flat array (no nested arrays)
// Remove all of the falsey elements in the uncompactedArr
// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
// Find the index of the first element in numbers that is over 7 and is even
// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
_.range(30, 101, 5);
[30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]


var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
undefined
_.flatten(bumpyArr)
["hello", "maytag", "sigmonster", "swizzle"]


var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
undefined
_.compact(uncompactedArr)
["hello", "quantom bogo-sort"]


_.object(arrToTransform)
Object {age: "location", NaN: undefined}

_.flatten([[1, 25, 100], [1, 14, 25], 24, Infinity, -0]);
[1, 25, 100, 1, 14, 25, 24, Infinity, -0]

_.pairs(objectToMap)
[Array[2], Array[2], Array[2]]

_.invert(objectToMap)
Object {100: "start", 853: "middle", 912: "end"}
