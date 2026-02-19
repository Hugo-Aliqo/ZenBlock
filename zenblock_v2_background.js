
const REDIRECT_URL = chrome.runtime.getURL("blocked.html");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startBlock") {
    const { sites, duration } = request;
    const endTime = Date.now() + (duration * 60000);

    chrome.storage.local.set({ endTime, isActive: true, sites }, () => {
      applyRules(sites);
      chrome.alarms.create("endFocus", { delayInMinutes: duration });
      sendResponse({ status: "ok" });
    });
  }
  return true;
});

function applyRules(sites) {
  const rules = sites.map((site, index) => ({
    id: index + 1,
    priority: 1,
    action: { type: "redirect", redirect: { extensionPath: "/blocked.html" } },
    condition: { urlFilter: site, resourceTypes: ["main_frame"] }
  }));

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: Array.from({length: 100}, (_, i) => i + 1),
    addRules: rules
  });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "endFocus") {
    stopBlocking();
  }
});

function stopBlocking() {
  chrome.storage.local.set({ isActive: false });
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: Array.from({length: 100}, (_, i) => i + 1)
  });
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: "Session terminée !",
    message: "Vous pouvez maintenant accéder à vos sites.",
    priority: 2
  });
}

// Vérification au démarrage au cas où le temps a expiré pendant que le navigateur était fermé
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['endTime', 'isActive', 'sites'], (data) => {
    if (data.isActive) {
      if (Date.now() > data.endTime) {
        stopBlocking();
      } else {
        applyRules(data.sites);
        const remainingMinutes = (data.endTime - Date.now()) / 60000;
        chrome.alarms.create("endFocus", { delayInMinutes: remainingMinutes });
      }
    }
  });
});
