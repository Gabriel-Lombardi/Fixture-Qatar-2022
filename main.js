function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;
  let ganoLocal = false;
  let empate = false;
  let ganoVisitante = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal == golesVisitante) empate = true;
  else ganoVisitante = true;

  let tds = document.querySelectorAll('td');
  for (let td of tds) {
    if (td.textContent == local || td.textContent == visitante) {
      // PJ + 1
      td.nextElementSibling[2].textContent =
      parseInt(td.nextElementSibling[2].textContent) + 1;
      // si hay empate
      if (empate = true) {
        td.nextElementSibling[5].textContent = parseInt(td.nextElementSibling[5].textContent) + 1;
      }
      // si gana el local
      if (ganoLocal = true) {
        td.nextElementSibling[4].textContent = parseInt(td.nextElementSibling[4].textContent) + 3;
      }
      // si gana el visitante
      if (ganoVisitante = true) {
      }
      // goles a favor

      // goles en contra

      // diferencia de gol
    }
  }
}
