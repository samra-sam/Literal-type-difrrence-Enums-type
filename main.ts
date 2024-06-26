//literal type
let subjects: "Math" | "Chemistry" | "Urdu" | "English";
subjects = "Math";
console.log(subjects);


//Enum type
enum days {
    Saturday,
    Monday,
    Thursday
}
const day:string = days[1];
console.log(day);
