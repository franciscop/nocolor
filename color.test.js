// Barebones smoke test, not a full suite
import { describe, expect, it } from "bun:test";
import color from "./color.js";

describe("color", () => {
  it("colors a string", () => {
    expect(color("{red}hi{/red}")).toBe("\x1b[31mhi\x1b[0m");
  });

  it("colors a template literal", () => {
    const name = "world";
    expect(color`hello {bright}${name}{/}`).toBe("hello \x1b[1mworld\x1b[0m");
  });

  it("throws on an unknown color", () => {
    expect(() => color("{nope}hi")).toThrow('"{nope}" is not a valid color');
  });
});
