let pressed = false;
let universidad = "soy una universidad";
let mapa = document.getElementById("mapa");


function swichear(universidad){
    console.log(universidad);
    if (universidad == "unicar"){
        mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.527291304693!2d-86.8250200535283!3d21.20154617331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c298cab405b%3A0xc7ce34485e9b3b8!2sUniversidad%20del%20Caribe!5e0!3m2!1ses!2smx!4v1795229391102!5m2!1ses!2smx";

    }
    if (universidad == "TecNM"){
        mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3536465733437!2d-86.83805122550069!3d21.138319984007975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2be8f1679b3d%3A0x7ca6036dd487c1e5!2sTecNM%20-%20Campus%20Canc%C3%BAn!5e0!3m2!1ses!2smx!4v1795243417801!5m2!1ses!2smx";
    }
}

