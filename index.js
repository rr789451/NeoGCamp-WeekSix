var translate = document.querySelector("#translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var minionurl = "https://api.funtranslations.com/translate/minion.json"


function getURL(text) {
    return minionurl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Please try later.")
}


function clickHandler() {
    var originalText = txtInput.value; 

    fetch(getURL(originalText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
           })
        .catch(errorHandler)
};

translate.addEventListener("click", clickHandler)