export default class MyMod {
  static info = {
    name: "title",
    id: "mymod",
    messages: {
      "en": {
        "title": "NewtonPE",
        "blocks.setgravity": "set gravity direction [angle: 180] power [number: 1]"
      },
      "ru": {
        "blocks.setgravity": "задать направление гравитации [angle: 180] мощность [number: 1]"
      }
    }
  };
  
  init() {
    this.gravityDirection = 180;
    this.gravityPower = 1;
    this.scratch.addCommandBlock("setgravity", (direction, power) => {
      this.gravityDirection = direction;
      this.gravityPower = power;
    });
  }
  
  tick() {
    for (let sprite of this.scratch.sprites) {
      sprite.move(0, 1);
    }
    return true;
  }
}
