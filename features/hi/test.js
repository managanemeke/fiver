import {
  test,
} from "tape-six";

import {
  hi,
} from "./feature.js";

test("hi", tester => {
  tester.equal(hi(), "hi", "return hi");
});

