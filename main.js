(class {
  static get info() {
    return {
      name: "MyMod"
    };
  }
  
  init() {
    this.scratch.addCommandBlock("say_hi", () => {
      alert("hi!");
    });
  }
})
