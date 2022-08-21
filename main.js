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
    this.scratch.addField("velocityX", "number");
    this.scratch.addField("velocityY", "number");
    this.scratch.addCommandBlock("setgravity", (direction, power) => {
      this.gravityDirection = direction;
      this.gravityPower = power;
    });
  }
  
  tick() {
    for (let sprite of this.scratch.sprites) {
      setTimeout((() => {
        sprite.move(sprite.velocityX, sprite.velocityY);
        let gravityVelocity = this.scratch.math.rotateXY(0, this.gravityPower * 10, this.gravityDirection);
        sprite.velocityX += gravityVelocity[0];
        sprite.velocityY += gravityVelocity[1];
      }).bind(this), 0);
    }
    return true;
  }
}
