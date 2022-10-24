const path = require("path");
const fs = require('fs')
const { app, BrowserWindow, ipcMain  } = require("electron");
const filename = `${app.getPath('userData')}/notedata.json`

const loadContent = async () => {
  return fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : '';
}

const saveContent = async (content) => {
  fs.writeFileSync(filename, content, 'utf8');
}

ipcMain.handle("loadContent", (e) => {
  return loadContent();
});

ipcMain.on("saveContent", (e, content) =>{
  saveContent(content);
});


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },
  });
  
  mainWindow.webContents.openDevTools();

  console.log(filename);

  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  } else {
    mainWindow.loadURL("http://localhost:3000");
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
