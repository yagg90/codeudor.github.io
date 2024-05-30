// Obtener el parámetro PKCodeudor de la URL
var urlParams = new URLSearchParams(window.location.search);
var PKCodeudor = urlParams.get('PKCodeudor');

if (PKCodeudor) {
    // URL del endpoint con el parámetro PKCodeudor
    var url = 'https://pruebas.centraldearrendamientos.com/WebR17_JTDesarrollo.NetEnvironment/APIRadicacionNG/ObtenerDatosCodeudor?PKCodeudor=' + PKCodeudor;

    // Hacer la solicitud GET
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Suponiendo que la respuesta es JSON
        })
        .then(data => {
            console.log(data); // Mostrar los datos en la consola
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });
} else {
    console.error('No se encontró el parámetro PKCodeudor en la URL.');
}

