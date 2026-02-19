
let timerInterval;

function updateUI() {
  chrome.storage.local.get(['endTime', 'isActive'], (data) => {
    if (data.isActive && data.endTime > Date.now()) {
      document.getElementById('setup').style.display = 'none';
      document.getElementById('activeMode').style.display = 'block';
      document.getElementById('timerDisplay').style.display = 'block';
      
      startCountdown(data.endTime);
    } else {
      document.getElementById('setup').style.display = 'block';
      document.getElementById('activeMode').style.display = 'none';
      clearInterval(timerInterval);
    }
  });
}

function startCountdown(endTime) {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const timeLeft = endTime - Date.now();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      updateUI();
      return;
    }
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    document.getElementById('timerDisplay').innerText = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

document.getElementById('startBtn').addEventListener('click', () => {
  const sitesInput = document.getElementById('sites').value;
  const duration = parseInt(document.getElementById('duration').value);
  
  if (!sitesInput || isNaN(duration)) return alert("Veuillez remplir tous les champs.");

  const sites = sitesInput.split(',').map(s => s.trim()).filter(s => s.length > 0);
  
  chrome.runtime.sendMessage({ action: "startBlock", sites, duration }, () => {
    updateUI();
  });
});

updateUI();
