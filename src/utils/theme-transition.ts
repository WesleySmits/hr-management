// Ensure theme changes apply without flash: add immediate class toggle and force style update
export function applyThemeInstant(root: HTMLElement, theme: 'light'|'dark'){
  // Add theme-transition class for smooth color transition when allowed
  root.classList.add('theme-root','theme-transition');
  // Apply data-theme attribute instantly
  root.setAttribute('data-theme', theme);
  // Force style recalc to avoid flash
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  root.offsetHeight;
}
