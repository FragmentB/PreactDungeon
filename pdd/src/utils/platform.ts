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
      alert('Electron is quitting');  
      window.electron.quit();
    } else {
      // Fallback for web build
      alert('Thanks for playing! (Web version cannot close the app.)');
      // Optionally navigate to main menu or reset game state
    }
}