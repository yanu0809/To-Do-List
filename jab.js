let inputPrincipal = document.querySelector(".input");
let btnAgregar = document.querySelector(".boton-agregar");
let divContainer = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.value = nuevaTarea;
    inputItem.classList.add("item-input");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("item");
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
    botonEditar.classList.add("boton-editar");
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
    botonRemover.classList.add("boton-remover");
    nuevoDiv.appendChild(inputItem);
    nuevoDiv.appendChild(botonEditar);
    nuevoDiv.appendChild(botonRemover);
    divContainer.appendChild(nuevoDiv);
    botonEditar.addEventListener("click", function () {
      if (inputItem.disabled === true) {
        inputItem.disabled = false;
        botonEditar.innerHTML = `<i class="fas fa-lock-open"></i>`;
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = `<i class="fas fa-lock"></i>`;
      }
    });
    botonRemover.addEventListener("click", function () {
      divContainer.removeChild(nuevoDiv);
    });
  }
}

function chequearInput() {
  if (inputPrincipal.value) {
    let demo = new Item(inputPrincipal.value);
    inputPrincipal.value = "";
  }
}
btnAgregar.addEventListener("click", chequearInput);
inputPrincipal.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    chequearInput();
  }
});
