const { ipcRenderer } = require('electron')

document.getElementById('startServer').addEventListener('click', () => {
  ipcRenderer.send('start-server')
});

document.getElementById('stopServer').addEventListener('click', () => {
  ipcRenderer.send('stop-server')
});

ipcRenderer.on('server-started', () => {
  document.getElementById('status').textContent = 'Server started';
});

ipcRenderer.on('server-stopped', () => {
  document.getElementById('status').textContent = 'Server stopped';
});

ipcRenderer.on('server-status', (event, status) => {
  document.getElementById('status').innerText = status
});

ipcRenderer.on('server-error', (event, error) => {
  document.getElementById('status').innerText = error
});
