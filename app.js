
document.addEventListener("DOMContentLoaded", () => {
  const descripcion = document.getElementById("descripcion");
  const monto = document.getElementById("monto");
  const fecha = document.getElementById("fecha");
  const categoria = document.getElementById("categoria");
  const agregarBtn = document.getElementById("agregarBtn");
  const historial = document.getElementById("historial");
  const totalElement = document.getElementById("total");

  let gastos = JSON.parse(localStorage.getItem("gastos")) || [];

  function actualizarHistorial() {
    historial.innerHTML = "";
    let total = 0;
    gastos.forEach(gasto => {
      const item = document.createElement("li");
      item.textContent = `${gasto.fecha} - ${gasto.descripcion} - S/ ${parseFloat(gasto.monto).toFixed(2)} [${gasto.categoria}]`;
      historial.appendChild(item);
      total += parseFloat(gasto.monto);
    });
    totalElement.textContent = `Total: S/ ${total.toFixed(2)}`;
  }

  agregarBtn.addEventListener("click", () => {
    if (!descripcion.value || !monto.value || !fecha.value || !categoria.value) {
      alert("Completa todos los campos.");
      return;
    }

    const nuevoGasto = {
      descripcion: descripcion.value,
      monto: monto.value,
      fecha: fecha.value,
      categoria: categoria.value
    };

    gastos.push(nuevoGasto);
    localStorage.setItem("gastos", JSON.stringify(gastos));
    actualizarHistorial();

    descripcion.value = "";
    monto.value = "";
    fecha.value = "";
    categoria.value = "";
  });

  actualizarHistorial();
});
