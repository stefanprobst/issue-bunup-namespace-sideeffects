Steps:

1. `bun install && bun run build` — builds without errors
2. `bun src/index.ts` — works correctly
3. `bun dist/index.js` — ReferenceError: foo is not defined

Expected:

`dist/index.js` should include `var foo = "foo"` and `var bar = "bar"` after the `__export()` call.

Actual:

those declarations are tree-shaken away even though they're live (referenced inside the getter closures registered with `__export`).

Notes:

works correctly when `sideEffects: false` is removed from `package.json`
