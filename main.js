(class {
  static info = {
    name: "title",
    messages: {
      "en": {
        "title": "My mod",
        "blocks.alert": "alert %1"
      },
      "ru": {
        "title": "Мой мод",
        "blocks.alert": "предупредить %1"
      }
    }
  };
  
  init() {
    this.scratch.addCommandBlock("alert", (message) => {
      this.scratch.gui.alert(this.name, message);
    });
  }
})
