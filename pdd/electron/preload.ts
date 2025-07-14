// electron/preload.ts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  quit: () => ipcRenderer.send('app:quit'),
  // Add more safe APIs here later
});
