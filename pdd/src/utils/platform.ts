declare global {
  interface Window {
    electron?: {
      quit: () => void;
    };
  }
}

export const isElectron = () => navigator.userAgent.includes('Electron');

export function handleQuit() {
    if (isElectron() && window.electron?.quit) {
      window.electron.quit();
    } else {
      alert('Thanks for playing! (Web version cannot close the app.)');
      // Optionally navigate to main menu or reset game state
    }
}