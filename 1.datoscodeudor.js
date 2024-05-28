const datosFormulario = {

  primerNombreCod: '',
  segundoNombreCod: '',
  primerApellidoCod: '',
  segundoApellidoCod: '',
  documentoCod: '',
  numDocumentoCod: 0,
  sexoCod: '',
  emailCod: '',
  celularCod: '',
  ocupacionCod: '',
}
// abrir modal de verificacion y carga de datos
document.addEventListener('DOMContentLoaded', function ()
 {
  const personalDataForm = document.querySelector('#personalDataForm')
  //console.log(personalDataForm);
  //const abrirModalAcuerdos = document.getElementById('abrirModalDeAcuerdos')
  //const btnAceptarAcuerdos = document.getElementById('botonAceptar')


  personalDataForm.addEventListener('submit', function (e) {
    e.preventDefault()
    var campos = personalDataForm.elements;
    const errorMessageElement = personalDataForm.querySelector(
      '#personalDataFormErrorMessage'
    )

    var hayCamposVacios = false;
    let errorMessage = ''
    // Iterar sobre los campos y verificar si alguno está vacío
    for (var i = 0; i < campos.length; i++) {
      // Verificar si el campo  y está vacío
      if (campos.type !== "submit" && campos[i].value.trim() === "") {
        console.log("empty", campos[i], 'value', campos[i].value);
        hayCamposVacios = true;
        errorMessage = 'Por favor completa todos los campos antes de continuar.'
        break; 
      } else if (campos.type !== "submit" && campos[i].value === "on") {
        console.log("empty", campos[i], 'value', campos[i].value);
        hayCamposVacios = true;
        errorMessage = 'Por favor autoriza el uso de tu información y términos y condiciones'
        break
      }
    }
    // Si hay algún campo vacío, mostrar un mensaje de error
    if (hayCamposVacios) {
      // alert("Por favor completa todos los campos antes de continuar.");
      errorMessageElement.textContent = errorMessage
    } else {
      const validacionModal = document.getElementById('validacionModal')
      // const datosPaso1 = document.getElementById('datosPaso1')
      const data = new FormData(personalDataForm)

      validacionModal.style.display = 'block'

      datosFormulario.primerNombreCod = data.get('primerNombreCod')
      datosFormulario.segundoNombreCod = data.get('segundoNombreCod')
      datosFormulario.primerApellidoCod = data.get('primerApellidoCod')
      datosFormulario.segundoApellidoCod = data.get('segundoApellidoCod')

      datosFormulario.documentoCod = data.get('documentoCod')
      datosFormulario.numdocumentocod = data.get('numDocumentoCod')
      datosFormulario.sexoCod= data.get('sexoCod')
      datosFormulario.emailCod = data.get('emailCod')
  
      datosFormulario.celularCod = data.get('celularCod')
      datosFormulario.ocupacionCod = data.get('ocupacionCod')
    
      console.log(datosFormulario);


      const modalPrimerNombre = document.getElementById('datosPaso1primernombre')
      const modalSegundoNombre = document.getElementById('datosPaso1segundonombre')
      const modalPrimerApellido = document.getElementById('datosPaso1primerapellido')
      const modalSegundoApellido = document.getElementById('datosPaso1segundoapellido')
      const modalTipoDocumento = document.getElementById('datosPaso1tipodocumento')
      const modalNumeroDocumento = document.getElementById('datosPaso1numdocumento')
      const modalSexo = document.getElementById('datosPaso1sexo')
      const modalCorreo = document.getElementById('datosPaso1correo')
      const modalCelular = document.getElementById('datosPaso1celular')
      const modalOcupacion = document.getElementById('datosPaso1ocupacion')
    
      modalPrimerNombre.value = datosFormulario.primerNombreCod
      modalSegundoNombre.value = datosFormulario.segundoNombreCod
      modalPrimerApellido.value = datosFormulario.primerApellidoCod
      modalSegundoApellido.value = datosFormulario.segundoApellidoCod
      modalTipoDocumento.value = datosFormulario.documentoCod
      modalNumeroDocumento.value = datosFormulario.numdocumentocod
      modalSexo.value = datosFormulario.sexoCod
      modalCorreo.value = datosFormulario.emailCod
      modalCelular.value = datosFormulario.celularCod
      modalOcupacion.value = datosFormulario.ocupacionCod 
     
    }
  })
  const datosPaso1 = document.getElementById('datosPaso1')
  const editBtn = document.getElementById('editBtnStep1')
  const inputs = datosPaso1.getElementsByTagName('input')
  const selects = datosPaso1.getElementsByTagName('select')

  editBtn.addEventListener('click', function () {
 
    for (let input of inputs) {
      input.disabled = !input.disabled
    }
    for (let select of selects) {
      select.disabled = !select.disabled
    }
  })

})
//console.group('in 3.validacionOTP.js')
//console.log({ formStepsNum, updateFormSteps, updateProgressbar })
//console.groupEnd('in 3.validacionOTP.js')

document.getElementById('submitOTPBtn').addEventListener('click', function () {

  var codigoOTP = '123456' // Código de ejemplo

  // Verificación de que el código ingresado sea válido
  if (codigoOTP === '123456') {
    // Código válido, ocultar modal OTP
    document.getElementById('otpModal').style.display = 'none'

    // Mostrar paso 2 del formulario
    document.getElementById('paso2').style.display = 'block'

    // Cerrar todas las ventanas modales
    closeModal()

    formStepsNum++
    updateFormSteps()
    updateProgressBar()
  } else {
    // Código inválido, mostrar mensaje de error
    alert('Código OTP incorrecto. Por favor, inténtelo de nuevo.')
  }
})
  