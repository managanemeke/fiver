import {
  printKey,
  translateMain,
} from "./feature.js";

document.addEventListener("keydown", async (e) => {
  e.preventDefault();
  printKey(e.code);
  await translateMain();
});

let x = 0, y = 0;
document.addEventListener('touchstart', (e) => {
  x = e.changedTouches[0].screenX;
  y = e.changedTouches[0].screenY;
});
document.addEventListener('touchend', async (e) => {
  const dx = e.changedTouches[0].screenX - x;
  const dy = e.changedTouches[0].screenY - y;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);

  switch (true) {
    case Math.max(absX, absY) < 30:
      printKey("Space")
      await translateMain();
      break;
    case absX > absY:
      switch (true) {
        case dx > 0:
          printKey("KeyL");
          break;
        default:
          printKey("KeyH");
      }
      await translateMain();
      break;
    default:
      switch (true) {
        case dy > 0:
          printKey("KeyJ");
          break;
        default:
          printKey("KeyK");
      }
      await translateMain();
  }
});

