const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".text_muneco");
var muneco = document.querySelector(".muneco");
var botonCopiar = document.querySelector(".btn_copiar");
var parrafo = document.querySelector(".texto__parrafo");
var resultado = document.querySelector(".caja__texto__resultado");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function btnEncriptar(){
    ocultarAdelante();
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase()
    for(let i=0 ; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    ocultarAdelante();
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i=0 ; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function btnCopiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    mensaje.value = "";
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
