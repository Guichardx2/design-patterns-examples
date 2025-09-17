// Solução Factory Method Pattern

//Classes concretas
class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

// Factory para as classes concretas de transporte
class TransportFactory {
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static createTransport(type) {
    const TransportClass = this.types[type];
    if (!TransportClass) {
      throw new Error("Tipo de transporte não suportado");
    }
    return new TransportClass();
  }
}

//Cliente
function main() {
  const types = ["bicicleta", "patinete", "onibus"];

  let transport;

  try {
    types.forEach((type) => {
      transport = TransportFactory.createTransport(type);
      console.log(transport.move());
    });
  } catch (e) {
    throw new Error("Erro ao processar transporte", e.message);
  }
}

main();
