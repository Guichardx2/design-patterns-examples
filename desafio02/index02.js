//Bridge Pattern
class TV {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
    setVolume(volume) {
      console.log(`Volume da TV: ${volume}`);
    }
  }
  
  class Radio {
    turnOn() {
      console.log("Rádio ligado.");
    }
    turnOff() {
      console.log("Rádio desligado.");
    }
    setVolume(volume) {
      console.log(`Volume do Rádio: ${volume}`);
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  
    setVolume(volume) {
      this.device.setVolume(volume);
    }
  }
  
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Silenciando...");
      this.device.setVolume(0);
    }
  }
  
  // Cliente
  const tv = new TV();
  const radio = new Radio();
  
  const remoteTV = new RemoteControl(tv);
  remoteTV.pressPowerButton(true);
  remoteTV.setVolume(50);
  remoteTV.pressPowerButton(false);
  
  console.log("---");
  
  const remoteRadio = new AdvancedRemoteControl(radio);
  remoteRadio.pressPowerButton(true);
  remoteRadio.setVolume(30);
  remoteRadio.mute();
  remoteRadio.pressPowerButton(false);