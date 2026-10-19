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
      console.log("tap");
      break;
    case absX > absY:
      console.log(
        dx > 0 ? 'swipe right' : 'swipe left'
      );
      break;
    default:
      console.log(
        dy > 0 ? 'swipe down' : 'swipe up'
      );
  }
});

