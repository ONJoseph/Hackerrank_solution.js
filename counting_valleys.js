/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, , or a downhill, step. Hikes always start and end at sea level, and each step up or down represents a

unit change in altitude. We define the following terms:

    A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
    A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 
*/

function processData(input) {
    var level = 0, vallies = 0;
    var slopes = input.split("\n", 2)[1];
    for (var i in slopes) {
        level = (slopes.charAt(i) == 'U') ? level + 1 : level - 1;  //Increase/decrease sea level 
        if (level === 0 && slopes.charAt(i) === 'U') {              //Check for transition of sea level
            vallies++;                                  
        }
    }
    console.log(vallies);
} 
////////// BOILERPLATE PLATE CODE \\\\\\\\\\
process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
