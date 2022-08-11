(class {
  static get info() {
    return {
      name: "MyMod"
    };
  }
  
  init() {
    this.scratch.addBlock("sayHi", () => {
      alert("hi!");
    });
  }
})
