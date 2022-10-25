const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, ipcMain, shell } = require("electron");
const filename = `${app.getPath("userData")}/notedata.json`;
const desktopicon = path.join(__dirname, "../icon.ico");

const loadContent = async () => {
  return fs.existsSync(filename) ? fs.readFileSync(filename, "utf8") : "";
};

const openExe = async (file) => {
  shell.openPath(file);
};

const saveContent = async (content) => {
  fs.writeFileSync(filename, content, "utf8");
};

ipcMain.handle("loadContent", (e) => {
  return loadContent();
});

ipcMain.on("openExe", (e, file) => {
  openExe(file);
});

ipcMain.on("saveContent", (e, content) => {
  saveContent(content);
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 1200,
    minWidth: 475,
    minHeight: 645,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "black",
      symbolColor: "white",
      height: 24
    },
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
