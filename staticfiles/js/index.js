
// Función para abrir los popups
function crearPopup(idPopup, btnAbrirId, btnCerrarClases) {
    const popup = document.querySelector(idPopup);
    const overlay = popup.querySelector(".overlay");
    const botonesCerrar = btnCerrarClases.map((clase) => document.querySelector(clase));
    const btnAbrir = document.querySelector(btnAbrirId);

    function abrirPopup() {
        popup.classList.add("active");
    }

    function cerrarPopup() {
        popup.classList.remove("active");
        const inputs = popup.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));
    }

    btnAbrir.addEventListener("click", abrirPopup);
    overlay.addEventListener("click", cerrarPopup);
    botonesCerrar.forEach((btn) => btn.addEventListener("click", cerrarPopup));
}

// Asignamos el evento de abrir los popups para eliminar y editar a cada elemento dentro del ciclo
document.addEventListener("DOMContentLoaded", () => {
    const employeesContainer = document.querySelector(".main");
    
    // Delegación de eventos para los iconos de eliminar y editar
    employeesContainer.addEventListener("click", (event) => {
        // Verificamos si el clic fue en el icono de eliminar
        if (event.target.id === "delIcon") {
            crearPopup("#delPp", "#delIcon", [".can", ".acp"]);
        }
        
        // Verificamos si el clic fue en el icono de editar
        if (event.target.id === "editIcon") {
            crearPopup("#editPp", "#editIcon", [".can", ".acp"]);
        }
    });

    // Inicializamos los popups generales
    crearPopup("#addPp", "#add", [".can", ".acp"]);
    crearPopup("#filPp", "#fil", [".can", ".acp"]);
});
