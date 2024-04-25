document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    document.getElementById('clienteForm').reset();
  });