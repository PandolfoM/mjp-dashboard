const { ipcRenderer, contextBridge } = require("electron");

const API = {
  notepad: {
    saveContent: (content) => ipcRenderer.send("saveNotepadContent", content),
    loadContent: ipcRenderer.invoke("loadNotepadContent"),
  },
  config: {
    saveContent: (content) => ipcRenderer.send("saveConfigContent", content),
    loadContent: ipcRenderer.invoke("loadConfigContent"),
  },
  openExe: (file) => ipcRenderer.send("openExe", file),
};

contextBridge.exposeInMainWorld("app", API);
