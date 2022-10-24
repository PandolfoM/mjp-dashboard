const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld(
  'notepad',
  {
    saveContent: (content) => ipcRenderer.send('saveContent', content),
    content: ipcRenderer.invoke("loadContent"),
  }
);