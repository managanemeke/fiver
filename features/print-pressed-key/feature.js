export const printKey = (event) => {
  const target = document.querySelector("main");
  target.textContent = keySymbol(event.code);
}

export const keySymbol = (key) => {
  switch (key) {
    case "KeyH":
      return "←";
    case "KeyJ":
      return "↓"
    case "KeyK":
      return "↑"
    case "KeyL":
      return "→"
    case "Space":
      return "○"
    default:
      return "";
  }
}

