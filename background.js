
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getToggleState') {
        chrome.storage.local.get(['toggleState'], (result) => sendResponse(result.toggleState));
        return true;
    }
});