chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === 'update') {
        chrome.tabs.create({ url: 'src/welcome/welcome.html' });
    }
});