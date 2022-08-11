(class {
  static get info() {
    return {
      name: "MyMod"
    };
  }
  
  init() {
    this.scratch.addCommandBlock("sayHi", () => {
      alert("hi!");
    });
  }
})
