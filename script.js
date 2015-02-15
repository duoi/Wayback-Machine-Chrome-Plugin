chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
});

function getArchive(currentUrl,tab) {

    console.log("Page " + currentUrl + " was selected.");
    chrome.tabs.create({ 

        url: "http://web.archive.org/web/" + currentUrl,
    })
}

chrome.contextMenus.create({

    title: "Search: %s", 
    contexts:["selection"], 
    onclick: getArchive,
});
