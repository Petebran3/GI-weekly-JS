//very easy
function minFunc(p1, p2) {
return p1 + p2;
}
console.log(minFunc(7,9));

//stops here

//easy
let students = [["Pete", "Branham", 23], ["Tre", "Branham", 28], ["Miles", "Gordan", 27]];
console.log(`Hello my name is ${students[0][0]} ${students[0][1]} and I'm ${students[0][2]} years old`)




//stops here

//medium
let userInput = prompt("Please enter your birthday month number");
if(userInput == 1){
    console.log("January")
}
else if (userInput == 2){
    console.log("Feb")
}
else if (userInput == 3){
    console.log("March")
}
else if (userInput == 4){
    console.log("April")
}
else if (userInput == 5){
    console.log("May")
}
else if (userInput == 6){
    console.log("June")
}
else if (userInput == 7){
    console.log("July")
}
else if (userInput == 8){
    console.log("August")
}
else if (userInput == 9){
    console.log("September")
}
else if (userInput == 10){
    console.log("October")
}
else if (userInput == 11){
    console.log("November")
}
else if (userInput == 12){
    console.log("December")
}
else{
    alert("Invalid. Please enter a number between 1 and 12")
}



//stop here

//hard

const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;
const BMItom = tomMass / (tomHeight * tomHeight);
const BMIjerry = jerryMass / (jerryHeight * jerryHeight);
const jerryHigherBMI = BMIjerry > BMItom
console.log(BMItom, BMIjerry, jerryHigherBMI);

//stop here