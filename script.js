document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación simple: Si el usuario y la contraseña son correctos
    if (username === "admin" && password === "12345") {
        alert("Inicio de sesión exitoso!");
        // Aquí podrías redirigir a otra página
        // window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
});
