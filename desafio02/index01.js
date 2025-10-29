//Decorator Pattern
class Message {
    constructor(text) {
      this.text = text;
    }
  
    getText() {
      return this.text;
    }
  }
  
  class MessageDecorator {
    constructor(message) {
      this.message = message;
    }
  
    getText() {
      return this.message.getText();
    }
  }
  
  class UpperCaseDecorator extends MessageDecorator {
    getText() {
      return super.getText().toUpperCase();
    }
  }
  
  class ExclamationDecorator extends MessageDecorator {
    getText() {
      return super.getText() + "!!!";
    }
  }
  
  class EmojiDecorator extends MessageDecorator {
    getText() {
      return "😊 " + super.getText() + " 😊";
    }
  }
  
  const msg = new Message("hoje o dia está horrível");
  console.log(msg.getText());
  
  const decoratedMsg = new EmojiDecorator(
    new ExclamationDecorator(
      new UpperCaseDecorator(msg)
    )
  );
  console.log(decoratedMsg.getText()); // 😊 HOJE O DIA ESTÁ HORRÍVEL!!! 😊