// renderer/main.js
const pingBtn = document.getElementById('pingBtn');
const responseElement = document.getElementById('response');

pingBtn.addEventListener('click', async () => {
  const response = await window.electron.ping();
  responseElement.textContent = response;
});
