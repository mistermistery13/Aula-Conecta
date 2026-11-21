const selLanguage = document.getElementById("selLanguage");
const iframe = document.querySelector('iframe[name="MainScrollable"]');

// Traducir el documento actual
function translateDocument(data) {
    const elements = document.querySelectorAll("[data-language]");
    elements.forEach(element => {
        const language = element.getAttribute("data-language");
        var text = data[selLanguage.value]?.[language] || language;

        if (Array.isArray(text)) {
            text = text.join("");
        }

        const letterCase = element.getAttribute("data-letterCase");
        if (letterCase) {
            if (letterCase.toLowerCase() === "upper") {
                text = text.toUpperCase();
            } else if (letterCase.toLowerCase() === "lower") {
                text = text.toLowerCase();
            }
        }

        const wrapFormat = element.getAttribute("data-wrap");
        if (wrapFormat) {
            text = wrapFormat.replace("{text}", text);
        }

        element.textContent = text;
    });
}

// Traducir el Iframe indicado
function translateIframe(data) {
    if (iframe && iframe.contentWindow) {
        const iframeDoc = iframe.contentWindow.document;
        const iframeElements = iframeDoc.querySelectorAll("[data-language]");
        iframeElements.forEach(element => {
            const language = element.getAttribute("data-language");
            var text = data[selLanguage.value]?.[language] || language;

            if (Array.isArray(text)) {
                text = text.join("");
            }

            const letterCase = element.getAttribute("data-letterCase");
            if (letterCase) {
                if (letterCase.toLowerCase() === "upper") {
                    text = text.toUpperCase();
                } else if (letterCase.toLowerCase() === "lower") {
                    text = text.toLowerCase();
                }
            }

            const wrapFormat = element.getAttribute("data-wrap");
            if (wrapFormat) {
                text = wrapFormat.replace("{text}", text);
            }

            element.textContent = text;
        });
    }
}

// Buscar y seleccionar idioma
function changeLanguage() {
    fetch("Translations/languages.json")
        .then(response => response.json())
        .then(data => {
            translateDocument(data);
            translateIframe(data);
        })
        .catch(error => console.log(error));
}

changeLanguage();
iframe.addEventListener("load", changeLanguage);
selLanguage.addEventListener("change", changeLanguage);