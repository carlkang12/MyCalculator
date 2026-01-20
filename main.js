const { app, BrowserWindow } = require('electron');
const path = require('path');

// 啟用 remote 模組支援
require('@electron/remote/main').initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "生活開銷分攤計算器",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  
  // 啟用此視窗的 remote 模組
  require('@electron/remote/main').enable(win.webContents);

  // 隱藏上方功能選單，讓它看起來更像專業軟體
  win.setMenuBarVisibility(false);

  // 載入應用程式主網頁（請確保您的 HTML 檔名為 app.html）
  win.loadFile('app.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});