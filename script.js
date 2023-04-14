const textArea = document.querySelector(".escribir");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnencriptar(){
	const textoencriptado = encriptar(textArea.value);
	mensaje.value  = textoencriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
}

function encriptar(stringencriptador){
	let matrizcodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
	stringencriptador = stringencriptador.toLowerCase();

	for(let i = 0; i < matrizcodigo.length; i++){
		if (stringencriptador.includes(matrizcodigo[i][0])) {
			stringencriptador = stringencriptador.replaceAll(matrizcodigo[i][0], matrizcodigo [i][1]);

		}
	}
	return stringencriptador
}

function btndesencriptar(){
	const textoencriptado = desencriptar(textArea.value);
	mensaje.value  = textoencriptado;
	textArea.value = "";
}

function desencriptar(stringdesencriptaor){
	let matrizcodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
	stringdesencriptaor = stringdesencriptaor.toLowerCase();

	for(let i = 0; i < matrizcodigo.length; i++){
		if (stringdesencriptaor.includes(matrizcodigo[i][1])) {
			stringdesencriptaor = stringdesencriptaor.replaceAll( matrizcodigo [i][1] , matrizcodigo[i][0]);

		}
	}
	return stringdesencriptaor
}


