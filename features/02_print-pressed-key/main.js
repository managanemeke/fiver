import { printKey } from "./feature.js";

document.addEventListener("keydown", event => {
  event.preventDefault();
  printKey(event.code);
});

let x = 0, y = 0;
document.addEventListener('touchstart', e => {
  x = e.changedTouches[0].screenX;
  y = e.changedTouches[0].screenY;
});
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - x;
  const dy = e.changedTouches[0].screenY - y;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);

  switch (true) {
    case Math.max(absX, absY) < 30:
      printKey("Space")
      break;
    case absX > absY:
      dx > 0
        ? printKey("KeyL")
        : printKey("KeyH")
      break;
    default:
      dy > 0
        ? printKey("KeyJ")
        : printKey("KeyK")
  }
});

