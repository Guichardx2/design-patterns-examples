class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = null;
  }

  showDetails() {
    console.log(
      `Detalhes do Carro:
      Marca: ${this.brand ?? "Não especificada, conferir documentação"} 
      Ano: ${this.year ?? "Não especificado, conferir documentação"} 
      Modelo: ${this.model ?? "Não especificado, conferir documentação"} 
      Motor: ${this.engine ?? "Não especificado, conferir documentação"}, 
      Cor: ${this.color ?? "Não especificada, conferir documentação"}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setGPS(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}


class CarDirector {
  static buildUberXCar() {
    return new CarBuilder()
      .setBrand("Tesla")
      .setModel("Model S")
      .setYear(2023)
      .setEngine("Electric")
      .setColor("Red")
      .setGPS(true)
      .build();
  }

  static buildUberPovaoCar() {
    return new CarBuilder()
      .setBrand("Toyota")
      .setModel("Camry")
      .setYear(2022)
      .setEngine("2.5L")
      .setColor("Blue")
      .setGPS(true)
      .build();
  }
}

const uberX = CarDirector.buildUberXCar();
const uberPovao = CarDirector.buildUberPovaoCar();
const customCar = new CarBuilder()
  .setBrand("Ford")
  .setModel("Mustang")
  .setYear(2021)
  .setEngine("V8")
  .setColor("Black")
  .setGPS(false)
  .build();

  const customCar2 = new CarBuilder()
  .setBrand("Chevrolet")
  .setModel("Camaro")
  .setEngine("V6")
  .setColor("Yellow")
  .build();

uberX.showDetails();
uberPovao.showDetails();
customCar.showDetails();
customCar2.showDetails();
