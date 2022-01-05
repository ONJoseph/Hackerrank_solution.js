
/*
Complete the function solveMeFirst to compute the sum of two integers.

Example

Return

.

Function Description

Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

    int a: the first value
    int b: the second value

Returns
- int: the sum of
and
Constraints
1<=a, b<=1000;
Sample Input
a = 2
b = 3
Sample Output
5
*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
    input += data;
});


process.stdin.on('end', function () {
    var inputArray = input.split("\n");
    var res;
    var a = parseInt(inputArray[0], 10);
    var b = parseInt(inputArray[1], 10);
    console.log(a+b);
  
});




