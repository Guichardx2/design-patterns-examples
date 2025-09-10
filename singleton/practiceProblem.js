// Classe Database
class Database {
  constructor(connectionString) {
    if (Database.instance) {
      return Database.instance;
    }

    this.connectionHistorty = [];
    this.connectionString = connectionString;
    this.id = Math.random();
    Database.instance = this;
    console.log(`🔌 Nova conexão criada: ${this.id}`);
  }

  query(sql) {
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
    this.connectionHistorty.push(sql);
  }

  logHistory() {
    console.log(`Histórico de queries na conexão ${this.id}:`, this.connectionHistorty);
  }

}

// Cliente cria várias conexões (mesmo que não precise)
const db1 = new Database("db://meu-banco");
db1.query("SELECT * FROM users");
db1.logHistory();

const db2 = new Database("db://meu-banco");
db2.query("SELECT * FROM products");
db2.logHistory();
