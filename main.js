//literal type
var subjects;
subjects = "Math";
console.log(subjects);
//Enum type
var days;
(function (days) {
    days[days["Saturday"] = 0] = "Saturday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Thursday"] = 2] = "Thursday";
})(days || (days = {}));
var day = days[1];
console.log(day);
