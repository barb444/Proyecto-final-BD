function crearPopup(id) {
    const pp = document.querySelector(id);
    const overlay = pp.querySelector('.overlay');
    const inputs = pp.querySelectorAll('input');
    const acpBtn = pp.querySelector('#acp');
    const canBtn = pp.querySelector('#can');

    function abrirPp() {
        overlay.classList.add('active');
        pp.classList.add('active');
    }

    function cerrarPp() {
        overlay.classList.remove('active');
        pp.classList.remove('active');
        inputs.forEach(input => (input.value = '')); 
    }

    overlay.addEventListener('click', cerrarPp);
    canBtn.addEventListener('click', cerrarPp);

    return abrirPp;
}

const popup = crearPopup('#popup');
document.querySelector('#add').addEventListener('click', popup);