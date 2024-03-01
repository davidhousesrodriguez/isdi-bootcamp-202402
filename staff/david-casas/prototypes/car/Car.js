function Car(brand, model, year, color, doors, fuelType, transmission, gears) {
    this.brand = brand;
    this.model = model;
    this.status = "off";
    this.deposit = 0;
    this.year = year;
    this.color = color;
    this.doors = doors;
    this.fuelType = fuelType;
    this.transmission = transmission;
    this.gears = gears;
    this.gear = 0;
    this.speed = 0;
    this.acceleration = 0;
    this.direction = "";
    this.steering = 0;
  }
  
  Car.prototype.fuel = function (load) {
    this.deposit = load;
  };
  
  Car.prototype.start = function () {
    this.status = "on";
  };
  
  Car.prototype.stop = function () {
    this.status = "off";
  };
  
  Car.prototype.changeGear = function (gear) {
    this.gear = gear;
    if (gear > this.gears) {
      throw new RangeError("gear greater than the given gear");
    }
  };
  
  Car.prototype.speedUp = function (speed) {
    this.acceleration = speed;
    if (this.gear > 0) {
      this.direction = "forward";
    } else if (this.gear === 0) {
      this.direction = "";
    } else if (this.gear === -1) {
      this.direction = "backward";
    }
  };
  
  Car.prototype.changeSteering = function (wheelTurn) {
    this.steering = wheelTurn;
  
    if (this.steering > 0 && this.gear > 0 && this.acceleration > 0)
      this.direction = "forward-right";
    if (this.steering < 0 && this.gear > 0 && this.acceleration > 0)
      this.direction = "forward-left";
  
    if (this.steering < 0 && this.gear === -1 && this.acceleration > 0)
      this.direction = "backward-left";
    if (this.steering > 0 && this.gear === -1 && this.acceleration > 0)
      this.direction = "backward-right";
  };
  
  module.exports = Car;