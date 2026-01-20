const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "生活開銷分攤計算器",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

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