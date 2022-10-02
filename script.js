var translateButton = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputBox = document.querySelector("#output-box");

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

function clickEventHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => (outputBox.innerText = json.contents.translated))
    .catch(errorHandler);
}

function errorHandler(error) {
  console.log("error occured!", error);
}

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}
translateButton.addEventListener("click", clickEventHandler);
