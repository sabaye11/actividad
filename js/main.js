document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío tradicional

    // Obtener datos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Agregar datos a la tabla
    const table = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(); // Insertar una nueva fila

    // Insertar celdas y añadir el texto
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = username;
    cell2.textContent = password;

    // Limpiar el formulario después de añadir
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
