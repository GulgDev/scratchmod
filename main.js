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
    this.spritePosMap = {};
    this.scratch.addCommandBlock("setgravity", (direction, power) => {
      this.gravityDirection = direction;
      this.gravityPower = power;
    });
  }
  
  onProjectStart() {
    for (let sprite of this.scratch.sprites) {
      this.spritePosMap[sprite] = sprite.x, sprite.y;
    }
  }
  
  onProjectStop() {
    for (let sprite in this.spritePosMap) {
      sprite.moveto(this.spritePosMap[sprite]);
    }
  }
  
  tick() {
    for (let sprite of this.scratch.sprites) {
      sprite.move(...this.scratch.math.rotateXY(0, this.gravityPower, this.gravityDirection));
    }
    return true;
  }
}
