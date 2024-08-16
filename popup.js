document.addEventListener('DOMContentLoaded', ()=>{
    console.log('popup.js loaded');

    var toggleSwitch = document.getElementById("toggle");

    updateToggleImage();
    toggleSwitch.addEventListener('click', toggle);


    function toggle() {
        console.log('Toggle clicked');
        chrome.storage.local.get(['toggleState'], (result) => {
            // Toggle the toggle state
            chrome.storage.local.set({toggleState: !result.toggleState});
            // Update the image
            updateToggleImage();
            // Reload page
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    }

    function updateToggleImage() {
        chrome.storage.local.get(['toggleState'], (result) => {
            if (result.toggleState) {
                toggleSwitch.src = "res/toggle_on.png";
            } else {
                toggleSwitch.src = "res/toggle_off.png";
            }
        });
    }
});