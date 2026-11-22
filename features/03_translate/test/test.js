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

test("translates forward branch", t => {
  t.equal(translate("↑←←"), "x", "return x");
  t.equal(translate("↑←↑"), "b", "return b");
  t.equal(translate("↑←→"), "p", "return p");

  t.equal(translate("↑↑←"), "o", "return o");
  t.equal(translate("↑↑↑"), "z", "return z");
  t.equal(translate("↑↑→"), "s", "return s");

  t.equal(translate("↑→←"), "c", "return c");
  t.equal(translate("↑→↑"), "d", "return d");
  t.equal(translate("↑→→"), "t", "return t");
});

test("translates right branch", t => {
  t.equal(translate("→←←"), "u", "return u");
  t.equal(translate("→←↑"), "l", "return l");
  t.equal(translate("→←→"), "r", "return r");

  t.equal(translate("→↑←"), "j", "return j");
  t.equal(translate("→↑↑"), "y", "return y");
  t.equal(translate("→↑→"), "h", "return h");

  t.equal(translate("→→"), "i", "return i");
});

