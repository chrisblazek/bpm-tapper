var RESET_TIME = 3000;
var timeout;
var lastPress = performance.now();
var average = 0;
var iterations = 1;

chrome.browserAction.onClicked.addListener(function() {
  var elapsedTime = performance.now() - lastPress;
  lastPress = performance.now();

  if (elapsedTime > RESET_TIME) {
    average = 0;
    iterations = 1;
  } else {
    average = (average * (iterations - 1) + elapsedTime) / iterations;
    iterations += 1;
    var bpm = Math.round(60000 / average);
    chrome.browserAction.setBadgeText({ text: bpm.toString() });
  }

  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function() {
    chrome.browserAction.setBadgeText({ text: "" });
  }, RESET_TIME);
});