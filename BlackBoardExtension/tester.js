chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
    if (message === "fucku") {
        let paragraphs = document.getElementsByTagName('p');
        for (let i = 0; i < paragraphs.length; i++){
            paragraphs[i].innerHTML = 'nigger';
        }
    }
}