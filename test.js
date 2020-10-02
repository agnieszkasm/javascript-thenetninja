var Car = function(maxSpeed, driver) {

        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.drive = function(speed, time) {
            console.log(speed * time);
        };
        this.logDriver = function() {
            console.log("driver name is " + this.driver);
        };


  }

  /*below we have 4 objects and abone one contructor function*/
  var myCar = new Car(10, "Ninja man");
  var myCar2 = new Car(60, "A man");
  var myCar3 = new Car(70, "Aga");
  var myCar4 = new Car(10000, "DDD");

  myCar.drive(30,5);
  myCar3.logDriver();
  myCar4.logDriver();
  myCar4.drive(33,10);
