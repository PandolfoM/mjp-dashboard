const { ipcRenderer, contextBridge } = require("electron");

const API = {
  notepad: {
    saveContent: (content) => ipcRenderer.send("saveContent", content),
    loadContent: ipcRenderer.invoke("loadContent"),
  },
  openExe: (file) => ipcRenderer.send("openExe", file),
};

contextBridge.exposeInMainWorld("app", API);
