// src/lib/themeStore.ts
import { writable } from 'svelte/store';

// Define the store with a boolean type
export const isLightMode = writable<boolean>(true); // default to light mode
