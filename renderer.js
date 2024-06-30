const { ipcRenderer } = require('electron')

document.getElementById('startServer').addEventListener('click', () => {
  ipcRenderer.send('start-server')
})

document.getElementById('stopServer').addEventListener('click', () => {
  ipcRenderer.send('stop-server')
})

ipcRenderer.on('server-status', (event, status) => {
  document.getElementById('status').innerText = status
})