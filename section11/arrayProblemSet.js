
var arrayToReverse = ["here?", "you", "are", "Why"];
var uniformArrayNum = [1, 1, 1, 1];
var uniformArrayLetters = ["a", "a", "a", "a"];
var notUniformArrLetters = ["word", "word", "palabra", "word"];
var arrayOfIntegers = [42, 3, 2, 9, 31];

function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
};

printReverse(arrayToReverse);
printReverse(arrayOfIntegers);

function isUniform(array) {
    var baseline = array[0];
    // array.forEach(function(element) {
    //     if (element === baseline) {
    //         console.log(element + " equals the baseline: " + baseline);
    //         return true;
    //     } else if (element !== baseline) {
    //         console.log(element + " wasn't the same as " + baseline + ".");
    //         return false;
    //     }
    // });
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== baseline) {
            return false;
        }
    }
    return true;
};

isUniform(uniformArrayNum);
isUniform(uniformArrayLetters);
isUniform(notUniformArrLetters);

function sumArray(array) {
    var sum = 0;
    array.forEach(function(num) {
        sum += num;
    })
    return sum;
};

sumArray(uniformArrayNum);
sumArray(arrayOfIntegers);

function max(array) {
    var maxNum = array[0];

    array.forEach(function(num, i) {
        if (num > maxNum) {
            maxNum = num;
        };
    });
    console.log(maxNum);
    return maxNum;
};

max(arrayOfIntegers);
max([3, 4, 530, 102, -2]);
