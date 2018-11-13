class Car {
  constructor() {
    this.maxFuel = 100;
    this.currentFuel = this.maxFuel;
    this.engineIsRunning = false;
  }

  startEngine() {
    if (!this.engineIsRunning && this.currentFuel > 0) {
      this.engineIsRunning = true;
      console.log(`VROOM`);
    }
    else if (this.engineIsRunning) {
      console.log(`Engine is already running`);
    }
    else if (this.currentFuel <= 0) {
      console.log(`Out of Fuel`);
    }
  }

  stopEngine() {
    if (this.engineIsRunning) {
      this.engineIsRunning = false;
    }
    else {
      console.log(`Engine isn't running`);
    }
  }

  drive(minutesDriving) {
    if (this.engineIsRunning && this.currentFuel > 0) {
      //  Start Driving
      console.log(`Driving for ${minutesDriving} minutes`);

      //  Every minute driving costs a liter
      for (var i = 0; i < minutesDriving; i++) {
        this.currentFuel--;
        console.log(`Fuel: ${this.currentFuel}/${this.maxFuel}`);

        if (this.currentFuel <= 0) {
          this.stopEngine()
          console.log(`You stopped driving.`);
          return;
        }
      }

    } else {
      //  Can't drive
      console.log(`Not Driving :(`);
    }
  }

  addFuel(fuelLiters) {
    if (!this.engineIsRunning) {
      //  Add fuel to the tank
      console.log(`Adding fuel to the tank`);
      for (var i = 0; i < fuelLiters; i++) {
        if (this.currentFuel >= this.maxFuel) {
          this.currentFuel = this.maxFuel;
          console.log(`Full tank!`);
          return;
        }

        this.currentFuel++;
        console.log(`Fuel: ${this.currentFuel}/${this.maxFuel}`);
      }
    }
    else {
      //  engine is still running
      console.log(`Please stop your engine first`);
    }
  }
}

var car = new Car();

//  Testing Starting and Stopping
if (0) {
  console.log(`Start Engine:`);
  car.startEngine();
  console.log(`\nStart Engine Again:`);
  car.startEngine();
  console.log(`\nStop Engine:`);
  car.stopEngine();
  console.log(`\nStop Engine Again:`);
  car.stopEngine();
}

//  Test drive
car.drive(15);
car.startEngine();
car.drive(15);
//car.addFuel(20);
car.drive(5);
car.drive(30);
car.addFuel(15);
car.stopEngine();
car.addFuel(15);