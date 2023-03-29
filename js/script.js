// Definimos el alfabeto que vamos a utilizar en el cifrado
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Función que cifra el mensaje usando el cifrado de Vigenère
function encrypt() {
  // Obtenemos el valor de los campos de texto del mensaje y la clave y los convertimos a minúsculas
  const message = document.getElementById("message").value.toLowerCase();
  const key = document.getElementById("key").value.toLowerCase();

  // Eliminamos todos los caracteres que no sean letras del alfabeto del mensaje y la clave
  const messageClean = message.replace(/[^a-z]/g, "");
  const keyClean = key.replace(/[^a-z]/g, "");

  // Inicializamos la variable que va a contener el mensaje cifrado
  let encrypted = "";

  // Recorremos cada letra del mensaje y la ciframos usando el cifrado de Vigenère
  for (let i = 0; i < messageClean.length; i++) {
    // Obtenemos la letra del mensaje y la letra de la clave correspondiente a la posición actual
    const messageChar = messageClean.charAt(i);
    const keyChar = keyClean.charAt(i % keyClean.length);

    // Obtenemos el índice de la letra del mensaje y la letra de la clave en el alfabeto
    const messageIndex = alphabet.indexOf(messageChar);
    const keyIndex = alphabet.indexOf(keyChar);

    // Calculamos el índice de la letra cifrada en el alfabeto
    const newIndex = (messageIndex + keyIndex) % alphabet.length;

    // Agregamos la letra cifrada a la variable encrypted
    encrypted += alphabet.charAt(newIndex);
  }

  // Escribimos el mensaje cifrado en el campo de texto de resultado
  document.getElementById("result1").value = encrypted;
}

// Función que descifra el mensaje usando el cifrado de Vigenère
function decrypt() {
  // Obtenemos el valor de los campos de texto del mensaje y la clave y los convertimos a minúsculas
  const message = document.getElementById("message").value.toLowerCase();
  const key = document.getElementById("key").value.toLowerCase();

  // Eliminamos todos los caracteres que no sean letras del alfabeto del mensaje y la clave
  const messageClean = message.replace(/[^a-z]/g, "");
  const keyClean = key.replace(/[^a-z]/g, "");

  // Inicializamos la variable que va a contener el mensaje descifrado
  let decrypted = "";

  // Recorremos cada letra del mensaje y la desciframos usando el cifrado de Vigenère
  for (let i = 0; i < messageClean.length; i++) {
    // Obtenemos la letra del mensaje y la letra de la clave correspondiente a la posición actual
    const messageChar = messageClean.charAt(i);
    const keyChar = keyClean.charAt(i % keyClean.length);

    // Obtenemos el índice de la letra del mensaje y la letra de la clave en el alfabeto
    const messageIndex = alphabet.indexOf(messageChar);
    const keyIndex = alphabet.indexOf(keyChar);

    // Calculamos el índice de la letra descifrada en el alfabeto
    const newIndex =
      (messageIndex - keyIndex + alphabet.length) % alphabet.length;

    // Agregamos la letra descifrada a la variable decrypted
    decrypted += alphabet.charAt(newIndex);

    document.getElementById("result2").value = decrypted;
  }
}
