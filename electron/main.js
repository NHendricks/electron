// electron/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log("env:" + process.env.NODE_ENV + "!")
const isDev = process.env.NODE_ENV?.startsWith('development');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });
console.log("isdev:" + isDev)
  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    console.log("path renderer:" + path.join(__dirname, '../renderer/dist/index.html'))
    win.loadFile(path.join(__dirname, '../renderer/dist/index.html'));
  }
}


// Main-Prozess (electron/main.js)
const { ipcMain } = require('electron');

ipcMain.handle('ping', () => 'Pong');

app.whenReady().then(createWindow);
