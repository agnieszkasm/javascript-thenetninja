var myDate = new Date(); /*this will store current date for u*/

console.log(myDate);


var myPastDate = new Date(1984, 2, 2, 10, 30, 55);
var myFuturetDate = new Date(2045, 0, 31, 10, 30, 55);

console.log(myPastDate);
console.log(myFuturetDate);



var birthday = new Date(1985, 0, 15, 11, 50, 25);
var birthday2 = new Date(1985, 0, 15, 11, 50, 25);

/*get the month of the date 0 -11. Console will show zero -january*/
console.log(birthday.getMonth());

/*get full year YYYY*/
console.log(birthday.getFullYear());

/*get the date of the month (1 - 31)*/
console.log(birthday.getDate());

/*get the date of the week 0-6 where 0 is Sunday, .. 2 is Tue.*/
console.log(birthday.getDay());

/*get the hour of the day (0 -23)*/
console.log(birthday.getHours());

/*get the number of miliseconds since 1st Jan 1970. 
THIS IS RANDOM DATE BUT WE USE IT A LOT.
it shows number of miliseconds between those two dates: 
birthday dat and 1st Jan 1970*/
console.log(birthday.getTime());
/*we use it to compare dates*/


if(birthday.getTime() == birthday2.getTime()) {

    console.log("birthdays are equal")

} else {

    console.log("birthdays are not equal")
}















