/*
abrir nova aba
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('index.html')});
  });*/

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
      return {
        responseHeaders: details.responseHeaders.filter(function(header) {
          return (header.name.toLowerCase() !== 'x-frame-options');
        })
      };
    }, 
    { 
        urls: ["<all_urls>"] 
    }, 
    [
        "blocking", 
        "responseHeaders"
    ]
);

    procurarNoGoogle = function(word){
        var query = word.selectionText;
        chrome.tabs.create({url: "http://www.google.com/search?q=" + query});
     };
     
    chrome.contextMenus.create({
        title: "Procurar no Google",
        contexts:["selection"], 
        onclick: procurarNoGoogle 
    });


    procurarNoBrainly = function(word){
      var query = word.selectionText;
      chrome.tabs.create({url: "https://brainly.com.br/app/ask?entry=hero&q=" + query});
   };

    chrome.contextMenus.create({
      title: "Procurar no Brainly",
      contexts:["selection"], 
      onclick: procurarNoBrainly 
  });

//"all", "page", "frame", "selection", "link", "editable", "image", "video", "audio", "launcher", "browser_action", or "page_action"


 