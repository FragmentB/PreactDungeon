const keys = new Set<string>();

export function setupInput(): void {
  window.addEventListener('keydown', (e) => keys.add(e.key));
  window.addEventListener('keyup', (e) => keys.delete(e.key));
}

export function isKeyPressed(key: string): boolean {
  return keys.has(key);
}
