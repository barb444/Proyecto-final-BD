function addpp(){
    document.getElementById("addPp").style.display = "flex";
  console.log('holas')
}
function canBtnA(){
    document.getElementById("addPp").style.display = "none";
}


function filpp(){
    document.getElementById("filPp").style.display = "flex";
}
function canBtnF(){
    document.getElementById("filPp").style.display = "none";
}

let form_d = ''
let cedula = 0

function delpp(cedula_n){
  document.getElementById("delPp").style.display = "flex";
  form_d = document.getElementsByClassName("deleteForm" + cedula_n);
  form_d = form_d[0]
  console.log(cedula_n, ' n')
  cedula = cedula_n
  console.log(cedula, '-!')
 }

function delete_now(){
  event.preventDefault()
  console.log('running ', cedula)
  console.log(form_d)
  form_d.action = `${cedula}/`
  form_d.submit()
}

function canBtnD(){
    document.getElementById("delPp").style.display = "none";
}


let form_e = ''
let cedula_e = 0

function editpp(cedula_n) {
  // Mostrar el popup
  document.getElementById("editPp").style.display = "flex";
  
  // No es necesario modificar los valores de los campos
  // Solo mostramos el formulario de edición.
  
  // Si deseas hacer algo más, como almacenar la cédula para enviar con el formulario, puedes hacerlo aquí.
  cedula_e = cedula_n;
}
function canBtnE(){
    document.getElementById("editPp").style.display = "none";
}

console.log('hola')
