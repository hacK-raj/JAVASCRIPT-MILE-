function mixColors(color1, color2) {
  let result;
  color1 = color1.toLowerCase();
  color2 = color2.toLowerCase();

  switch (true) {
    case (color1 === "red" && color2 === "blue") ||
      (color1 === "blue" && color2 === "red"):
      result = "purple";
      break;
    case (color1 === "red" && color2 === "yellow") ||
      (color1 === "yellow" && color2 === "red"):
      result = "orange";
      break;
    case (color1 === "blue" && color2 === "yellow") ||
      (color1 === "yellow" && color2 === "blue"):
      result = "green";
      break;
    default:
      result = "Invalid color combination";
      break;
  }

  console.log(result);
}

mixColors("red", "blue");
mixColors("blue", "red");
mixColors("red", "yellow");
mixColors("yellow", "red");
mixColors("blue", "yellow");
mixColors("yellow", "blue");
mixColors("purple", "blue");
