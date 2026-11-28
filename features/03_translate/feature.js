export const translateMain = async () => {
  const main = document.querySelector("main");
  const mainText = main.textContent;
  const footer = document.querySelector("footer");
  footer.textContent = await translate(mainText);
}

export const translate = async (text) => {
  if (text.includes("↓↓↓")) {
    text = reduceReturns(text);
    changeMainText(text);
    await make("return");
  }
  if (text.includes("○")) {
    [text] = text.split("○");
    text += "○";
  }
  const translated = [];
  while (text.length > 0) {
    const [first, second, third] = text.split("");
    console.log(first, second, third);
    const [length, action, character] = triad(
      first, second, third,
    );
    text = text.slice(length);
    console.log(character);
    await make(action);
    if (action === "finish") {
      return "";
    }
    translated.push(character);
  }
  return translated.join("");
};

export const reduceReturns = (text) => {
  return text.replace(/.↓↓↓/g, '');
};

const clear = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  const footer = document.querySelector("footer");
  footer.textContent = "";
}

const changeMainText = (text) => {
  const main = document.querySelector("main");
  main.textContent = text;
}

const copyToClipboard = async () => {
  const footer = document.querySelector("footer");
  const text = footer.textContent;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    let area = document.createElement('textarea');
    area = Object.assign(ta, {
      value: text,
      style: 'position:fixed;opacity:0',
    });
    document.body.appendChild(area);
    area.select();
    const text = document.execCommand('copy');
    area.remove();
    return text;
  }
};

export const make = async (action) => {
  switch (action) {
    case "finish":
      console.log("finish");
      await copyToClipboard();
      clear();
      return;
    case "return":
      console.log("return");
      return;
    default:
      console.log("unknown");
      return;
  }
};

export const triad = (first, second, third) => {
  switch (first) {
    case "←":
      switch (second) {
        case "←":
          switch (third) {
            case "←":
              return [3, "", "a"];
            case "↑":
              return [3, "", "m"];
            case "→":
              return [3, "", "n"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "↑":
          switch (third) {
            case "←":
              return [3, "", "q"];
            case "↑":
              return [3, "", "g"];
            case "→":
              return [3, "", "k"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "→":
          switch (third) {
            case "←":
              return [3, "", "e"];
            case "↑":
              return [3, "", "v"];
            case "→":
              return [3, "", "f"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "↓":
          return [2, "return", ""];
        case "○":
          return [2, "finish", ""];
        default:
          return [2, "", ""];
      }
    case "↑":
      switch (second) {
        case "←":
          switch (third) {
            case "←":
              return [3, "", "x"];
            case "↑":
              return [3, "", "b"];
            case "→":
              return [3, "", "p"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "↑":
          switch (third) {
            case "←":
              return [3, "", "o"];
            case "↑":
              return [3, "", "z"];
            case "→":
              return [3, "", "s"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "→":
          switch (third) {
            case "←":
              return [3, "", "c"];
            case "↑":
              return [3, "", "d"];
            case "→":
              return [3, "", "t"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "↓":
          return [2, "return", ""];
        case "○":
          return [2, "finish", ""];
        default:
          return [2, "", ""];
      }
    case "→":
      switch (second) {
        case "←":
          switch (third) {
            case "←":
              return [3, "", "u"];
            case "↑":
              return [3, "", "l"];
            case "→":
              return [3, "", "r"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "↑":
          switch (third) {
            case "←":
              return [3, "", "j"];
            case "↑":
              return [3, "", "y"];
            case "→":
              return [3, "", "h"];
            case "↓":
              return [3, "return", ""];
            case "○":
              return [3, "finish", ""];
            default:
              return [3, "", ""];
          }
        case "→":
          return [2, "", "i"];
        case "↓":
          return [2, "return", ""];
        case "○":
          return [2, "finish", ""];
        default:
          return [2, "", ""];
      }
    case "↓":
      return [1, "return", ""];
    case "○":
      return [1, "finish", ""];
    default:
      return [1, "", ""];
  }
}

export const printKey = (eventCode) => {
  const target = document.querySelector("main");
  target.textContent += keySymbol(eventCode);
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

