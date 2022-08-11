(class {
  static get info() {
    return {
      name: "My mod"
    };
  }
  
  init() {
    this.scratch.addCommandBlock("alert [string]", (message) => {
      alert(message);
    });
  }
})
