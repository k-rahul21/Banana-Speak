var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var form = document.querySelector("#form");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text= " + text;
}

function errorHandler(error) {
    alert("Something went wrong with server! try again after some time.");
}

function clickHandler()
{
    var inputTxt = txtInput.value; // taking input

    //calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response =>response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};


form.addEventListener("click", clickHandler);
