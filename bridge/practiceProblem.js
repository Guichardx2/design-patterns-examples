// Muitas combinações duplicadas
class Audio {
  play(so) {
    console.log(`Reproduzindo áudio no ${so}`);
  }
}


class Video {
  play(so) {
    console.log(`Reproduzindo vídeo no ${so}`);
  }
}

class SO {
  constructor(format) {
    this.format = format;
  }
}

class Windows extends SO {
  execMedia() {
    this.format.play("Windows");
  }
}

class Linux extends SO {
  execMedia() {
    this.format.play("Linux");
  }
}

const audio = new Audio();
const video = new Video();

const w = new Windows(audio);
w.execMedia();

const w2 = new Windows(video);
w2.execMedia();

const l = new Linux(video);
l.execMedia();

const l2 = new Linux(audio);
l2.execMedia();
