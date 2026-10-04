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

