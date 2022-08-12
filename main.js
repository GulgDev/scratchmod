(class {
  static get info() {
    return {
      name: "title",
      messages: {
        "en": {
          "title": "My mod",
          "blocks.alert": "alert %1"
        },
        "ru": {
          "title": "Мой мод",
        }
      }
    };
  }
  
  init() {
    this.scratch.addCommandBlock(this.scratch.localization.getMessage("blocks.alert", "[string]"), (message) => {
      alert(message);
    });
  }
})
