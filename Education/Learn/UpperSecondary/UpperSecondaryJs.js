const params = new URLSearchParams(window.location.search);

let subject = params.get("subject");

const textDocumentation = document.getElementById("textDocumentation");

async function searchDocumentation(topic){
    let api = `${subject}/Documentation/${topic}.txt`;
    const response = await fetch(api)
    const text = await response.text();
    
    textDocumentation.innerText = text;
    await MathJax.typesetPromise([textDocumentation]);
}