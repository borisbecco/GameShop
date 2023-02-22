// NAV

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const mobileButton = document.querySelector(".mobile-btn");
const closeMobileButton = document.querySelector(".close-mobile-btn");

mobileButton.onclick = () => {
  navMenu.classList.add("active");
  mobileButton.classList.add("hidden");
  body.classList.add("disabled-scroll");
};

closeMobileButton.onclick = () => {
  navMenu.classList.remove("active");
  mobileButton.classList.remove("hidden");
  body.classList.remove("disabled-scroll");
};

window.onscroll = () => {
  this.scrollY > 100
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

//formulario

class Cliente {
  constructor(
    nombre,
    apellido,
    fechaNacimiento,
    email,
    dni,
    telefono,
    genero,
    monto
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.dni = dni;
    this.telefono = telefono;
    this.genero = genero;
    this.monto = monto;
  }
}

const clientes = [];

clientes.push(
  new Cliente(
    "Boris",
    "Becco",
    "12/11/1994",
    "borisbecco12@gmail.com",
    "38617246",
    "+54 1140272069",
    "Masculino",
    "75000"
  )
);
clientes.push(
  new Cliente(
    "Ramiro",
    "Gonzales",
    "14/11/1992",
    "ramirogonzales@gmail.com",
    "36549781",
    "+54 1149481389",
    "Masculino",
    "100000"
  )
);
clientes.push(
  new Cliente(
    "Juliana",
    "Ramirez",
    "30/12/1997",
    "julianaramirez@gmail.com",
    "40271531",
    "+54 1140272069",
    "Femenino",
    "50000"
  )
);

console.log(clientes);

let formulario = document.getElementById("form");

function ValidateEmail(email) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    alert("Correo electronico valido");
    document.form.email.focus();
    return true;
  } else {
    alert("Ingresaste un correo electronico incorrecto");
    document.form.email.focus();
    return false;
  }
}
formulario.addEventListener("submit", validarFormulario);
function validarFormulario(e) {
  e.preventDefault();
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("surname").value;
  let monto = document.getElementById("montos").value;
  if (ValidateEmail(email) != "") {
    clientes.push(
      new Cliente(
        (nombre = document.getElementById("name").value),
        (apellido = document.getElementById("surname").value),
        (fechaNacimiento = document.getElementById("birthdate").value),
        (email = document.getElementById("email").value),
        (dni = document.getElementById("dni").value),
        (telefono = document.getElementById("contact").value),
        (generos = document.getElementById("generos").value),
        (monto = document.getElementById("montos").value)
      )
    );
    return confirm(
      "¡Bienvenido " +
        nombre +
        " " +
        apellido +
        " tu prestamo de " +
        monto +
        " fue solicitado!"
    );
  }
}

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
guardarLocal("clientes", JSON.stringify(clientes));

const clientesAlmacenados = JSON.parse(localStorage.getItem("clientes"));


// MODAL

const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeEls = document.querySelectorAll("[data-close]");

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
