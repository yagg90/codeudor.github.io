document.addEventListener('DOMContentLoaded', function() {
    // URL del endpoint
    var url = 'http://pruebas.centraldearrendamientos.com/WebR17_JTDesarrollo.NetEnvironment/APIRadicacionNG/ObtenerDatosCodeudor?PKCodeudor=3626';

    // Hacer la solicitud GET
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Suponiendo que la respuesta es JSON
        })
        .then(data => {
            console.log(data); // Mostrar los datos en la consola para depuración

            // Aquí procesas los datos y actualizas el DOM
            if (data) {
                // Suponiendo que los datos contienen propiedades `nombre`, `direccion`, `telefono`, etc.
                if (data.primerApellidoCodeudor) {
                    document.getElementById('nombre-valor').textContent = data.primerApellidoCodeudor;
                    document.getElementById('nombre').style.display = 'block';
                }
                if (data.TipoPersonaCodeudor) {
                    document.getElementById('direccion-valor').textContent = data.TipoPersonaCodeudor;
                    document.getElementById('direccion').style.display = 'block';
                }
               
                // Añade más campos según sea necesario
            } else {
                document.getElementById('result-container').textContent = 'No se encontraron datos.';
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
            document.getElementById('result-container').textContent = 'Error al obtener los datos.';
        });
});
