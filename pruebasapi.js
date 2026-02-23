fetch('https://my-json-server.typicode.com/ZYILERNA/Prueba-de-API/emojis', {
  method: 'POST',
  body: JSON.stringify({
    name: "mi emoji personalizado",
    category: "custom"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.text()) // Leemos la respuesta como texto primero
  .then(text => {
    try {
      const json = JSON.parse(text); // Intentamos convertirlo a JSON
      console.log("POST Exitoso:", json);
    } catch (error) {
      console.error("El servidor no devolvió JSON. Devolvió este error:", text);
    }
  })
  .catch(error => console.error("Error de conexión:", error));