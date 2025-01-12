function crearPopup(id) {
    const pp = document.querySelector(id);
    const overlay = pp.querySelector('.overlay');
    const inputs = pp.querySelectorAll('input');
    const acpBtn = pp.querySelector('#acp');
    const canBtn = pp.querySelector('#can');

    function abrirPp() {
        overlay.classList.add('active'); // Activa la animación de overlay
        pp.classList.add('active'); // Activa la animación del popup
    }

    function cerrarPp() {
        overlay.classList.remove('active'); // Oculta el overlay
        pp.classList.remove('active'); // Oculta el popup
        inputs.forEach(input => (input.value = '')); // Limpia los inputs
    }

    overlay.addEventListener('click', cerrarPp);
    canBtn.addEventListener('click', cerrarPp);

    return abrirPp;
}

const popup = crearPopup('#popup');
document.querySelector('#add').addEventListener('click', popup);
