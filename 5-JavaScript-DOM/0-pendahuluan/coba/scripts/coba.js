class Bike {
  constructor(brand) {
    this.speed = 5;
    this.brand = brand;
    this.gear = 0;
    this.break = false;
    console.info(`Brand: ${this.brand}`);
  }

  addGear() {
    let currentGear = this.gear;
    if (currentGear === this.speed) {
      this.gear = 0;
    } else {
      this.gear++;
      console.info(`current gear ${currentGear} add to ${this.gear}`);
    }
  }

  reduceGear() {
    let currentGear = this.gear;
    console.info(`current gear ${currentGear} reduce to ${this.gear}`);
    this.gear--;
  }

  break() {
    if (this.break == false) {
      this.break = true;
      console.info(this.break);
    }
    console.info(this.break);
    return (this.break = false);
  }
}

class MountainBike extends Bike {
  constructor(brand) {
    super(brand);
  }
}

export { Bike, MountainBike };
