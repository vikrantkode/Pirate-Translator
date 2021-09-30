var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "	https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server...Try again after")
}
btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
    var inputText = txtInput.value;

    //fetching api
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)


}