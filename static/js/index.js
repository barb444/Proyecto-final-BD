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

crearPopup("#addPp","#add", [".can", ".acp"]);
crearPopup("#filPp","#fil", [".can", ".acp"]);
crearPopup("#delPp", "#delIcon", [".can", ".acp"]);
crearPopup("#editPp", "#editIcon", [".can", ".acp"]);
