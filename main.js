(class {
  static get info() {
    return {
      name: "My mod"
    };
  }
  
  init() {
    this.scratch.addCommandBlock("sayHi", () => {
      alert("hi!");
    });
  }
})
