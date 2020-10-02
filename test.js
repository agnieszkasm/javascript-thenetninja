    var myCar2 = {
        
        maxSpeed: 70, 
        driver: "Net Ninja",
        drive: function(speed, time) {
            console.log(speed * time);
        },
      
        logDriver: function() {
            console.log("driver name is " + this.driver);

        }
        /*UP: this again refers to myCar2. 
        Jakbys napisala zamiast this myCar2 tez by zadzialalo.
        Ale w przypadku 10 takich opcji to oszzcednisc czasu*/
    };  

        myCar2.logDriver();
        console.log(myCar2.maxSpeed);
        myCar2.drive(50, 3);
    







    