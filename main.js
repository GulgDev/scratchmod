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
    this.scratch.addCommandBlock(this.scratch.localization.getMessage("blocks.alert", "[string]"), (message) => {
      this.scratch.gui.alert(this.scratch.localization.getMessage("title"), message);
    });
  }
})
