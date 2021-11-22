
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert("Complete su nombre");
      return;
    }
    else if (nombre.length>30) {
        alert ("El campo Nombre permite máximo 30 caracteres"); 
        return;
    }

    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert("Complete su apellido");
      return;
    }
    else if (apellido.length>30) {
        alert ("El campo Apellido permite máximo 30 caracteres"); 
        return;
    }
    var correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert("Complete su correo electronico");
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length== 0) {
        alert("Escriba su mensaje");
        return;	
    }
    else if (mensaje.length>200) {
        alert ("El mensaje permite como máximo 200 caracteres"); 
        return;
    }
  
        
    this.submit();
    alert ("Mensaje enviado");
 }