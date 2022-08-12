(class {
  static get info() {
    return {
      name: "My mod"
    };
  }
  
  constructor() {
    this.scratch.localization.messages = {
      "en": {
        "blocks.alert": "alert %1"
      },
      "ru": {
      }
    };
  }
  
  init() {
    this.scratch.addCommandBlock(this.scratch.localization.getMessage("blocks.alert", "[string]"), (message) => {
      alert(message);
    });
  }
})
