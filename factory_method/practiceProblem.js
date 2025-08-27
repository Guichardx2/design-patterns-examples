// Classes concretas
class DebitCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class CreditCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class CardFactory {

  static types = {
    debit: DebitCard,
    credit: CreditCard,
  };

  static createCard(type) {
    const CardClass = this.types[type];
    if (!CardClass) {
      throw new Error("Tipo de cartão ou pagamento ainda não suportado");
    }
    return new CardClass();
  }
}

// Código do cliente
function main() {
  const types= ["credit", "debit"];

  let expenses;

  try {
    
    types.forEach(type => {
      expenses = CardFactory.createCard(type);
      expenses.pay(type, "R$ 500,00");
    });

  } catch (e) {
    throw new Error("Erro ao processar pagamento", e.message);
  }

}

main();
