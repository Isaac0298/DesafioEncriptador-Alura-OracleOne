function encriptar(){
    let texto = document.getElementById("textoInicial").value.toLowerCase();
    let imagen = document.getElementById("imagenMuñeco").style.display = "none";

    //el imeg va a significar:
    //i = me toma las mayusculas y minusculas
    //g = toma toda la oracion, con espacios
    //m= me toma las lineas multiples
    let textoEncriptado = texto.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoResultado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    let texto = document.getElementById("textoInicial").value.toLowerCase();

    let textoDesencriptado = texto.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById("textoResultado").innerHTML = textoDesencriptado;
}

function copiar(){
    let textoCopiar = document.querySelector("#textoResultado");
    textoCopiar.select();
    document.execCommand("copy");
}