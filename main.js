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
    const {addCommandBlock} = this.scratch;
    const {getMessage} = this.scratch.localization;
    const {alert} = this.scratch.gui;
    addCommandBlock(getMessage("blocks.alert", "[string]"), (message) => {
      alert(getMessage("title"), message);
    });
  }
})
