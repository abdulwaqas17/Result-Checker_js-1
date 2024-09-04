// -------- Result Checker ---------

var fullName = prompt('Enter your Full Name');
var rollNumber = prompt('Enter your Roll Number')
var english = +prompt('Enter Your English Obtain Numbers out of 100');
var mathematics = +prompt('Enter Your Mathematics Obtain Numbers out of 100');
var physics = +prompt ('Enter Your Physics Obtain Numbers out of 100');
var urdu = +prompt ('Enter Your Urdu Obtain Numbers out of 100');
var chemistry = +prompt ('Enter Your Chemistry Obtain Numbers out of 100');

// let english = +prompt('Enter Your English Obtain Numbers out of 100');
// let mathematics = +prompt('Enter Your Mathematics Obtain Numbers out of 100');
// let physics = +prompt ('Enter Your Physics Obtain Numbers out of 100');
// let urdu = +prompt ('Enter Your Urdu Obtain Numbers out of 100');
// let chemistry = +prompt ('Enter Your Chemistry Obtain Numbers out of 100');


// var hundered = 100;


// alert(english + mathematics + physics + urdu + chemistry);
// var obtainedNumbers = alert(english + mathematics + physics + urdu + chemistry);

// var percentage = alert((obtainedNumbers*hundered)/totalNumbers);
// console.log((obtainedNumbers*100)/500);

// english = 100;
// mathematics = 100;
// physics = 100;
// urdu = 100;
// chemistry = 100;

var totalNumbers = 500;
var obtainedNumbers = english + mathematics + physics + urdu + chemistry;
// var obtainedNumbers = 450;
// console.log(obtainedNumbers);

var percentage = (obtainedNumbers*100)/totalNumbers;

// alert(obtainedNumbers);

// alert(percentage);
// console.log(percentage,"%");

var Grade;
if (percentage <= 100 && percentage >= 90) {

    Grade = ('A+');

}  else if (percentage < 90 && percentage >= 80){

     Grade = ('A');

}  else if (percentage < 80 && percentage >= 70){

     Grade = ('B');

} else if (percentage < 70 && percentage >= 60){

     Grade = ('C');

} else if (percentage < 60 && percentage >= 50){

     Grade = ('D');

}  else if (percentage < 50){

     Grade = ('Fail');

} else {

     Grade = ('Your Grade is Not Found, Write Correct Numbers')

}

// alert(Grade)
alert('Your Result is Here: \nName ='+ fullName
  +'\nRoll Number ='+ rollNumber
  +'\nTotal Marks ='+ totalNumbers
  +'\nObtained Marks = '+ obtainedNumbers
  +'\nPercentage = '+ percentage
  +'\nGrade = '+ Grade);
// console.log('Your Result is Here: Obtained Numbers =',obtainedNumbers,'| Percentage =',percentage,'| Grade =',Grade);


