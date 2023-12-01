import { writable, readable, derived } from 'svelte/store';

// Theme
const themeMap = {
	true: 'dark',
	false: 'light'
};
export const isDarkMode = writable(true);
export function toggleDarkMode() {
	isDarkMode.update((isDarkMode) => !isDarkMode);
}
export const themeName = derived(isDarkMode, ($isDarkMode) => themeMap[`${$isDarkMode}`]);

// Points
export const numPoints = writable(0);

// Animation
export const animationDuration = readable(500);
