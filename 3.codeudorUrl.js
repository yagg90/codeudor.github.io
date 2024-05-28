document.addEventListener('DOMContentLoaded', () => {
    showForm();
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function showForm() {
    const userID = getQueryParam('userID');
    const userType = getQueryParam('tipo');

    const contentElement = document.getElementById('content');
    if (!contentElement) {
        console.error('Element with ID "content" not found.');
        return;
    }

    if (userID && userType) {
        try {
            const response = await fetch(`http://127.0.0.1:5500/codeudor.html?userID=${userID}&tipo=${userType}`);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const userData = await response.json();

            let formHTML = '';
            const codigoCodeudor = 'someValue'; // Asegúrate de definir esta variable o reemplazarla con el valor adecuado

            if (userID === codigoCodeudor) {
                console.log(userID);
            } else {
                console.log('error');
            }

            if (userType === 'juridico') {
                formHTML = `
                    <form>
                        <label for="companyName">Nombre de la empresa:</label>
                        <input type="text" id="companyName" name="companyName" value="${userData.companyName}" required>
                        <label for="ruc">RUC:</label>
                        <input type="text" id="ruc" name="ruc" value="${userData.ruc}" required>
                        <button type="submit">Enviar</button>
                    </form>`;
            } else if (userType === 'natural') {
                formHTML = `
                    <form>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" value="${userData.name}" required>
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" value="${userData.email}" required>
                        <button type="submit">Enviar</button>
                    </form>`;
            } else {
                formHTML = 'Tipo de usuario no reconocido.';
            }

            contentElement.innerHTML = formHTML;
        } catch (error) {
            console.error('Error:', error);
            contentElement.textContent = 'Error al cargar los datos.';
        }
    } else {
        contentElement.textContent = 'No se ha proporcionado un ID de usuario o tipo válido.';
    }
}
