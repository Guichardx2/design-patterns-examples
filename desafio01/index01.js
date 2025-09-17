//Solução Singleton Pattern

class Config {
    //Construtor com lógica de singleton instanciando a própria classe
  constructor() {

    if (Config.instance) {
      return Config.instance;
    }

    this.settings = {};
    this.configHistory = []; // Variável de histórico para garantir que todas as instâncias compartilhem o mesmo histórico
    Config.instance = this;
    console.log("🔧 Nova instância de Config criada");
  }

  setConfig(key, value) {
    this.settings[key] = value;
    this.configHistory.push({ key, value });
  }

  getConfig(key) {

    if (!(key in this.settings)) {
      return `Configuração ${key} não encontrada`;
    }

    return this.settings[key];
  }

  //Nova função para mostrar o histórico de configurações
  showConfigHistory() {
    console.log("Histórico de configurações:", this.configHistory);
  }
}

// Cliente 1
const config1 = new Config();
config1.setConfig("lang", "pt-BR");
console.log(config1.getConfig("lang"));
console.log(config1.getConfig("teste")); // Testando chave inexistente
config1.showConfigHistory();

// Cliente 2
const config2 = new Config();
config2.setConfig("theme", "dark");
console.log(config2.getConfig("theme"));
config2.showConfigHistory();
