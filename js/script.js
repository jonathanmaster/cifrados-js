function cifrar() {
  let SIZE_ALF = 26;
  
  let clave = document.getElementById("clave").value;
  let size_clave = clave.length;
  let mensaje = document.getElementById("mensaje").value;
  let size_mensaje = mensaje.length;
  
  // Guardar alfabeto
	let alfabeto = [];
  for(i = 0; i < SIZE_ALF; i++){
    alfabeto[i] = String.fromCharCode(65 + i);
  }
  
  // Guardar valores de la clave
  let valores_clave = [];
  for(i = 0; i < size_clave; i++){
    for(j = 0; j < SIZE_ALF; j++){
      if(clave[i] == alfabeto[j]){
      	valores_clave[i] = j;
      }
    }
  }
  
  // Cifrar
  let mensaje_cifrado = [];
  for(i = 0; i < size_mensaje; i++){
    let pos_letra;
    for(j = 0; j < SIZE_ALF; j++){
      if(mensaje[i] == alfabeto[j]){
        pos_letra = j;
      }
    }
    mensaje_cifrado[i] = alfabeto[(valores_clave[i%size_clave] + pos_letra) % SIZE_ALF];
  }
  
  // Escribir el resultado en el HTML
  div = document.getElementById("resultado1");
    let cadena = "";
    for(i = 0; i < size_mensaje; i++){
      cadena += mensaje_cifrado[i];
    }
    div.textContent = 'Mensaje cifrado: ' + cadena;
  event.preventDefault()

}

function modNeg(n1, n2){
  let mod = n1;
  while(mod < 0){
    mod += n2;
  }
  return mod;
}

function descifrar() {
  let SIZE_ALF = 26;
  
  let clave = document.getElementById("clave2").value;
  let size_clave = clave.length;
  let mensaje = document.getElementById("mensaje_cif").value;
  let size_mensaje = mensaje.length;
  
  // Guardar alfabeto
	let alfabeto = [];
  for(i = 0; i < SIZE_ALF; i++){
    alfabeto[i] = String.fromCharCode(65 + i);
  }
  
  // Guardar valores de la clave
  let valores_clave = [];
  for(i = 0; i < size_clave; i++){
    for(j = 0; j < SIZE_ALF; j++){
      if(clave[i] == alfabeto[j]){
      	valores_clave[i] = j;
      }
    }
  }
  
  // Descifrar
  let mensaje_descifrado = [];
  for(i = 0; i < size_mensaje; i++){
    let pos_letra;
    for(j = 0; j < SIZE_ALF; j++){
      if(mensaje[i] == alfabeto[j]){
        pos_letra = j;
      }
    }
    mensaje_descifrado[i] = alfabeto[modNeg((pos_letra - valores_clave[i%size_clave]), SIZE_ALF)];
    event.preventDefault()
  }
  
  // Escribir el resultado en el HTML
  div = document.getElementById("resultado2");
  let cadena = "";
  for(i = 0; i < size_mensaje; i++){
    cadena += mensaje_descifrado[i];
  }
  div.textContent = 'Mensaje descifrado: ' + cadena;
}