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


function delpp(){
    document.getElementById("delPp").style.display = "flex";
  const form = document.getElementsByClassName("deleteForm" + cedula);
  form.action = `${cedula}/`;

}
function canBtnD(){
    document.getElementById("delPp").style.display = "none";
}


function editpp(){
    document.getElementById("editPp").style.display = "flex";
}
function canBtnE(){
    document.getElementById("editPp").style.display = "none";
}

console.log('hola')
