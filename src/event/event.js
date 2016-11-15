chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'update' && details.previousVersion === '1.0.1') {
        chrome.tabs.create({ url: 'src/welcome/welcome.html' });
    }
});