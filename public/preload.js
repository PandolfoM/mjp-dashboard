const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld(
  'notepad',
  {
    saveContent: (content) => ipcRenderer.send('saveContent', content),
    openExe: (file) =>  ipcRenderer.send("openExe", file),
    content: ipcRenderer.invoke("loadContent"),
  }
);