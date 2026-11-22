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

test("translate for symbols", t => {
  t.equal(translate("←"), "", "return silince");
  t.equal(translate("←←"), "", "return silince");
  t.equal(translate("←←←"), "a", "return symbol");
  t.equal(translate("○←←←"), "a", "return symbol");
  t.equal(translate("←←←○"), "a", "return symbol");
  t.equal(translate("○←←←○"), "a", "return symbol");
});

test("translates left branch", t => {
  t.equal(translate("←←←"), "a", "return a");
  t.equal(translate("←←↑"), "m", "return m");
  t.equal(translate("←←→"), "n", "return n");

  t.equal(translate("←↑←"), "q", "return q");
  t.equal(translate("←↑↑"), "g", "return g");
  t.equal(translate("←↑→"), "k", "return k");

  t.equal(translate("←→←"), "e", "return e");
  t.equal(translate("←→↑"), "v", "return v");
  t.equal(translate("←→→"), "f", "return f");
});

