export default class MyMod {
  static info = {
    name: "title",
    id: "mymod",
    messages: {
      "en": {
        "title": "My mod",
        "blocks.alert": "alert [string: \"Alert!\"]"
      },
      "ru": {
        "title": "Мой мод",
        "blocks.alert": "предупредить [string: \"Предупреждение!\"]"
      }
    }
  };
  
  init() {
    this.scratch.addCommandBlock("alert", (message) => {
      this.scratch.gui.alert(this.name, message);
    });
  }
}
