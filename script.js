function onClickHandler(info, tab) {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function(tabs) {
        var currentUrl = tabs[0].url;
        getArchive(currentUrl, tab);
    })
};

function getArchive(currentUrl, tab) {

    console.log("Page " + currentUrl + " was selected.");
    chrome.tabs.create({

        url: "http://web.archive.org/web/" + currentUrl
    })
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
            var context = "all";
            var title = "Wayback Machine";
            var id = chrome.contextMenus.create({
                title: title,
                contexts: [context],
                id: "context" + context
            });});