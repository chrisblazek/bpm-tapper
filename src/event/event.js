chrome.runtime.onInstalled.addListener((reason, previousVersion) => {
    //if (reason === 'update') {
        chrome.tabs.create({ url: 'src/welcome/welcome.html' });
    //}
});