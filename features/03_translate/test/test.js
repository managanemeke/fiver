import {
  test,
} from "tape-six";

import {
  translate,
} from "../feature.js";

test("translate for actions", t => {
  t.equal(translate("○"), "", "return silince");
  t.equal(translate("○○"), "", "return silince");
  t.equal(translate("○○○"), "", "return silince");
});

