var getInput_ = require('prompt-sync')();
var age = getInput_("Enter Age: ");
var getAge = Number(age);
var getGender = getInput_("Enter Gender (M or F): ");
var getMaritialStatus = getInput_("MaritialStatus (Y or N): ");
if (getGender == 'F') {
    console.log("Work only in urban areas");
}
else if (getGender == 'M' && getAge >= 20 && getAge <= 40) {
    console.log("Work in any where");
}
else if (getGender == 'M' && getAge >= 40 && getAge <= 60) {
    console.log("He will Work in Urban urban areas");
}
else {
    console.log("Error");
}
