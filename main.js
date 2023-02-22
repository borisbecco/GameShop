
const IVA = 0.21;

const prestamos = [
  {
    monto: "50000",
    tasaAnual: 0.2,
    tasaMensual: 0.03,
    intereses: 0.1,
    impuestos: IVA,
  },
  {
    monto: "75000",
    tasaAnual: 0.3,
    tasaMensual: 0.06,
    intereses: 0.15,
    impuestos: IVA,
  },
  {
    monto: "100000",
    tasaAnual: 0.36,
    tasaMensual: 0.09,
    intereses: 0.2,
    impuestos: IVA,
  },
];

for (const prestamo of prestamos) {
  document.getElementById("tab").innerHTML =
    document.getElementById("tab").innerHTML +
    `<tr>
                        <td> ${prestamo.monto}</td>
                        <td> ${prestamo.tasaAnual}</td>
                        <td> ${prestamo.tasaMensual}</td>
                        <td> ${prestamo.intereses}</td>
                        <td> ${prestamo.impuestos}</td>
                    </tr>`;
}

// a usar a futuro

// function filtroClientes(prestamo, nombre) {
//   return prestamo.filter((objeto) => objeto.nombre == nombre);
// }
// function listaClientes(clientes) {
//   let lista = "";
//   for (const cliente of clientes) {
//     lista +=
//       "cliente: " +
//       cliente.nombre +
//       "\n" +
//       "prestamo otorgado: " +
//       cliente.prestamo +
//       "\n" +
//       "correo: " +
//       cliente.correo +
//       "\n";
//   }
//   return lista;
// }
// for (let index = 1; index <= 4; index++) {
//   let filtro = filtroClientes(clientes, prompt("Ingresar nombre de cliente"));
//   if (filtro.length > 0) {
//     alert(listaClientes(filtro));
//   } else {
//     alert("No existe cliente con ese nombre");
//   }
// }
