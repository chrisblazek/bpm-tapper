chrome.browserAction.onClicked.addListener(function() {
  chrome.browserAction.setBadgeText({ text: "128" });
});