const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, ipcMain, shell } = require("electron");
const filename = `${app.getPath("userData")}/notedata.json`;
const filenameConfig = `${app.getPath("userData")}/config.json`;
const desktopicon = path.join(__dirname, "../icon.ico");


// Open files/exe
const openExe = async (file) => {
  shell.openPath(file);
}

ipcMain.on("openExe", (e, file) => {
  openExe(file);
});

// Notepad
const loadNotepadContent = async () => {
  return fs.existsSync(filename) ? fs.readFileSync(filename, "utf8") : "";
};
const saveNotepadContent = async (content) => {
  fs.writeFileSync(filename, content, "utf8");
};

ipcMain.handle("loadNotepadContent", (e) => {
  return loadNotepadContent();
});

ipcMain.on("saveNotepadContent", (e, content) => {
  saveNotepadContent(content);
});

// Config
const loadConfigContent = async () => {
  return fs.existsSync(filenameConfig) ? fs.readFileSync(filenameConfig, "utf8") : "";
};
const saveConfigContent = async (content) => {
  fs.writeFileSync(filenameConfig, content, "utf8");
};

ipcMain.handle("loadConfigContent", (e) => {
  return loadConfigContent();
});

ipcMain.on("saveConfigContent", (e, content) => {
  saveConfigContent(content);
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 475,
    minHeight: 645,
    autoHideMenuBar: true,
    icon: desktopicon,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.openDevTools()

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
  });

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
