var date = new Date();
document.write(date + "<br>"+ "<br>");

var months= ["January", "Feburary", "March", "April", "May", "June", "July" ,"August", "September", "October", "November", "December"];
alert("Current month: " + months[date.getMonth()] );

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var shortDay = days[date.getDay()].slice(0,3);
alert("Today is " + shortDay) ;

var userMsg = days[date.getDay()];
if(userMsg==="Sunday" || userMsg==="Saturday" ){
document.write("It’s Fun day");
}
else{
    document.write("It’s Working day");
}

var days2 = date.getDate();
if(days2 <=15){
document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

var milliSeconds = date.getTime();
var minutes = milliSeconds / (1000 * 60);
document.write("Current Date: " + date + "<br>" + "Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>" + "Elapsed minutes since January 1, 1970: " + minutes + "<br>" + "<br>");

var  hours= date.getHours();
if(hours < 12){
document.write("Its AM");
}
else{
    document.write("Its PM");
}

var laterDate = new Date("dec 31, 2020");
document.write("Later Date: " + laterDate);

var ramadanDate = new Date("june 18, 2015");
var currentDate= new Date();
var ramadanDateMilliSeconds = ramadanDate.getTime();
var currentDateMilliSeconds = currentDate.getTime();
var diff =currentDateMilliSeconds-ramadanDateMilliSeconds;
var daysPassed= diff / 1000 / 60 /60 / 24;
var daysPassed=  Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(daysPassed +" days have passed since 1st Ramadan, 2015");

var referenceDate= new Date();
var beginningOfYear =new Date ("jan 01, 2015");
var diff2= referenceDate-beginningOfYear;
var elapsed= Math.floor(diff2 /1000);
document.write("On reference date: " + referenceDate + "<br>" + elapsed + " seconds had passed since begining of 2015" );

// var date2 = new Date();
// var currentHours= date2.getHours();
// var extractHours =date2.setHours(currentHours - 1)/ 1000/60/60;
// document.write("Current Date: " + date2  + "<br>" +"1 hours ago, it was " + extractHours) 







