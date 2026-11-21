import {
  test,
} from "tape-six";

import {
  keySymbol,
} from "../feature.js";

test("keySymbol for right hand", tester => {
  tester.equal(keySymbol("KeyH"), "←", "return left");
  tester.equal(keySymbol("KeyJ"), "↓", "return down");
  tester.equal(keySymbol("KeyK"), "↑", "return up");
  tester.equal(keySymbol("KeyL"), "→", "return right");
  tester.equal(keySymbol("Space"), "○", "return stand");

  tester.equal(keySymbol("KeyQ"), "", "return nothing");
});

