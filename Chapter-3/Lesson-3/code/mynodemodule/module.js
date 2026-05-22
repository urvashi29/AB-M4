class Color {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const allColors = [
  new Color("red", "#FF0000"),
  new Color("green", "#00FF00"),
  new Color("blue", "#0000FF"),
  new Color("yellow", "#FFFF00"),
  new Color("cyan", "#00FFFF"),
];

exports.getRandomColor = () => {
  return allColors[Math.floor(Math.floor(Math.random() * allColors.length))];
};

exports.allColors = allColors;
