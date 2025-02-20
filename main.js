const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Allows Node.js APIs in your renderer process
      contextIsolation: false, // Simplifies access to Electron features
    },
  });

  // Load your HTML file
  win.loadFile('index.html');

  // Maximize the window (optional)
  win.maximize();

  // Open DevTools for debugging (optional, comment out for production)
  // win.webContents.openDevTools();
}

// When Electron has initialized, create the window
app.whenReady().then(() => {
  createWindow();

  // Handle macOS behavior: recreate window if all are closed
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});