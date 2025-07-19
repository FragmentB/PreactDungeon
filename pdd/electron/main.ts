import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 640,
    //frame:false,
    resizable:false,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(__dirname, '../dist-electron/preload.js')
    }
  });

  win.setMenu(null);

  const isDev = !!process.env.VITE_DEV_SERVER_URL;

  if (isDev) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL!);
    //win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
    
  }
}

app.whenReady().then(createWindow);

ipcMain.on('app:quit', () => {
  app.quit();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
