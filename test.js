var myArray = new Array ();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.myspeed = 50;
myCar.driver = "Aga";

console.log(myCar.driver);

myCar.drive = function() {
    console.log("now driving");};

    myCar.drive(); /*tutaj jest nawias bo robimy call funkcji!
    wywolujemy ją! wyżeej dopiero ją definiujemy / kiedy ją assign!*/


/*SHORTHAND VERISON CURLY BRACKETS*/
var myCar2 = {
    maxSpeed: 50, 
    driver: "the Net ninja",
    drive: function() {
        console.log("now driving again");
    }
};  

    console.log(myCar2.maxSpeed);
    myCar2.drive();


    var myCar2 = {
        maxSpeed: 50, 
        driver: "the Net Ninja",
        drive: function(speed, time) {
            console.log(speed * time);
        }
    };  
    
        console.log(myCar2.maxSpeed);
        myCar2.drive(50, 3);
    







    