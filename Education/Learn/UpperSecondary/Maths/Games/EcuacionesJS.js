let btnGraph = document.getElementById("btnGraph");

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");
const inputEquation = document.getElementById("inputEquation");

const width = canvas.width;
const height = canvas.height;

// Centro de coordenadas
const centerX = width / 2;
const centerY = height / 2;

// Escala: píxeles por unidad
const scale = 40;

let equation;

function interpretar(){
    try {
        equation = math.compile(inputEquation.value);
    } catch (error) {
        console.log("Ecuación inválida:", error.message);
        return;
    }

    // Dibujar ejes
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Dibujar ecuación
    ctx.beginPath();

    for (let x = -centerX / scale; x <= centerX / scale; x += 0.01) {
        let y = equation.evaluate({x});

        let pixelX = centerX + x * scale;
        let pixelY = centerY - y * scale;

        if (x === -centerX / scale) {
            ctx.moveTo(pixelX, pixelY);
        } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
}


// Dibujar ejes

btnGraph.addEventListener("click",interpretar);