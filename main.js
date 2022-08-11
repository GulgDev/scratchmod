(class {
  static get info() {
    return {
      name: "MyMod"
    };
  }
  
  constructor(scratch) {
    this.scratch = scratch;
  }
  
  init() {
    this.scratch.addBlock("sayHi", () => {
      alert("hi!");
    });
  }
})
