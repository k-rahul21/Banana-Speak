var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);

btnTranslate.addEventListener("click", function cliclEventHandler()
{
    outputDiv.innerHTML = "hdashfjdhfjs " + txtInput.value;
});