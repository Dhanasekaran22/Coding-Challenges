var get_input_ = require('prompt-sync')();
var enterMarks = get_input_("Enter the 5 subject Marks: ");
var arrayOfMarks = enterMarks.split(',').map(Number);
function tofindGrade(element) {
    var totalMarks = 0;
    for (var i = 0; i < element.length; i++) {
        totalMarks += element[i];
    }
    console.log(totalMarks);
    var averageMarks = totalMarks / 5;
    if (averageMarks >= 90 && averageMarks <= 100) {
        return "A+";
    }
    else if (averageMarks >= 80 && averageMarks <= 90) {
        return "A";
    }
    else if (averageMarks >= 70 && averageMarks <= 80) {
        return "B+";
    }
    else if (averageMarks >= 60 && averageMarks <= 70) {
        return "B";
    }
    else if (averageMarks >= 50 && averageMarks <= 60) {
        return "C";
    }
    else {
        return "Fail";
    }
}
console.log(tofindGrade(arrayOfMarks));
