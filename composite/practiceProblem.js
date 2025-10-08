// Componente base
class UIComponent {
  render(indent = "") {
    throw new Error("Método abstrato!");
  }
}

// Componentes simples
class Button extends UIComponent {
  constructor(label) {
    super();
    this.label = label;
  }

  render(indent = "") {
    console.log(`${indent}Botão: [${this.label}]`);
  }
}

class Text extends UIComponent {
  constructor(content) {
    super();
    this.content = content;
  }

  render(indent = "") {
    console.log(`${indent}Texto: "${this.content}"`);
  }
}

// Componente composto
class Panel extends UIComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  render(indent = "") {
    console.log(`${indent}Painel: ${this.name}`);
    this.children.forEach((child) => child.render(indent + "   "));
  }
}

// Cliente
const loginPanel = new Panel("Painel de Login");
loginPanel.add(new Text("Tela de Login"));
loginPanel.add(new Button("Entrar"));
loginPanel.add(new Button("Cancelar"));

const mainPanel = new Panel("Janela Principal");
mainPanel.add(loginPanel);
mainPanel.add(new Text("Versão 1.0.0"));

mainPanel.render();