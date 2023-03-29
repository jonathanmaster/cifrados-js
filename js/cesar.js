// Función para cifrar el mensaje
function cifrar() {
  // Obtener el mensaje y la clave del formulario HTML
  var mensaje = document.getElementById("message").value;
  var clave = parseInt(document.getElementById("key").value);
  var resultado = "";

  // Recorrer cada carácter del mensaje
  for (var i = 0; i < mensaje.length; i++) {
    var codigo = mensaje.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      // Si el carácter es una letra mayúscula
      resultado += String.fromCharCode(((codigo - 65 + clave) % 26) + 65); // Aplicar el cifrado de César para las letras mayúsculas
    } else if (codigo >= 97 && codigo <= 122) {
      // Si el carácter es una letra minúscula
      resultado += String.fromCharCode(((codigo - 97 + clave) % 26) + 97); // Aplicar el cifrado de César para las letras minúsculas
    } else {
      // Si el carácter no es una letra
      resultado += mensaje.charAt(i); // Añadir el carácter tal cual al resultado
    }
  }

  // Mostrar el resultado en el formulario HTML
  document.getElementById("result1").value = resultado;

}

// Función para descifrar el mensaje
function descifrar() {
  // Obtener el mensaje y la clave del formulario HTML
  var mensaje = document.getElementById("message").value;
  var clave = parseInt(document.getElementById("key").value);
  var resultado = "";

  // Recorrer cada carácter del mensaje
  for (var i = 0; i < mensaje.length; i++) {
    var codigo = mensaje.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      // Si el carácter es una letra mayúscula
      resultado += String.fromCharCode(((codigo - 65 - clave + 26) % 26) + 65); // Aplicar el descifrado de César para las letras mayúsculas
    } else if (codigo >= 97 && codigo <= 122) {
      // Si el carácter es una letra minúscula
      resultado += String.fromCharCode(((codigo - 97 - clave + 26) % 26) + 97); // Aplicar el descifrado de César para las letras minúsculas
    } else {
      // Si el carácter no es una letra
      resultado += mensaje.charAt(i); // Añadir el carácter tal cual al resultado
    }
  }

  // Mostrar el resultado en el formulario HTML
  document.getElementById("result2").value = resultado;
  
}
