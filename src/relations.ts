import * as ns from "./barrel";

// Eagerly reads all values from the namespace at module evaluation time
export const values: unknown[] = Object.values(ns);
