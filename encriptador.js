function encryptText() {
    let text = document.getElementById("input-text").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("result-text").innerText = encryptedText;
}

function decryptText() {
    let text = document.getElementById("input-text").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("result-text").innerText = decryptedText;
}

function copyToClipboard() {
    let textToCopy = document.getElementById("result-text").innerText;
    let tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Confirmación de copia (opcional)
    alert("Texto copiado al portapapeles");
}
