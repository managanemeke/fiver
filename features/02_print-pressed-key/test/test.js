import {
  test,
} from "tape-six";

import {
  keySymbol,
} from "../feature.js";

test("keySymbol", tester => {
  tester.equal(keySymbol("KeyH"), "←", "return left");
});

test("keySymbol", tester => {
  tester.equal(keySymbol("KeyJ"), "↓", "return down");
});

test("keySymbol", tester => {
  tester.equal(keySymbol("KeyK"), "↑", "return up");
});

test("keySymbol", tester => {
  tester.equal(keySymbol("KeyL"), "→", "return right");
});

test("keySymbol", tester => {
  tester.equal(keySymbol("Space"), "○", "return stand");
});

test("keySymbol", tester => {
  tester.equal(keySymbol("KeyQ"), "", "return nothing");
});

