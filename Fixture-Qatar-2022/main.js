function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  // console.log(local,visitante);
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;

  let ganoLocal = false;
  let empate = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal == golesVisitante) empate = true;

  let tds = document.querySelectorAll('td');
  for (let td of tds) {
    if (td.textContent.includes(local) || td.textContent.includes(visitante)) {
      // PJ + 1
      // console.log(td);
      td.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.textContent) + 1;
      // si empatan
      if (empate) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.textContent) + 1;
        td.nextElementSibling.textContent = parseInt(td.nextElementSibling.textContent) + 1;
      }
    }
    if (td.textContent.includes(local)) {
      // GF del local
      td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesLocal);
      // GC del local
      td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + parseInt(golesVisitante);
      // Diferencia de gol
      // Diferencia de gol
      td.parentElement.children[9].textContent = parseInt(td.parentElement.children[7].textContent) - parseInt(td.parentElement.children[8].textContent);
      // Sumar 3 puntos y partido ganado (PG) si gana el local
      if (golesLocal > golesVisitante) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.textContent) + 1;
        td.nextElementSibling.textContent = (parseInt(td.parentElement.children[4].textContent) * 3) + parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
      }
      // Sumar partido perdido (PP) si pierde el local
      if (golesLocal < golesVisitante) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent) + 1;
      }
    }
    if (td.textContent.includes(visitante)) {
      // GF del visitante
      td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesVisitante);
      // GC del visitante
      td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + parseInt(golesLocal);
      // Sumar 3 puntos y partido ganado (PG) si gana el visitante
      if (golesVisitante > golesLocal) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.textContent) + 1;
        td.nextElementSibling.textContent = (parseInt(td.parentElement.children[4].textContent) * 3) + parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
      }
      // Sumar partido perdido (PP) si pierde el visitante
      if (golesVisitante < golesLocal) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent) + 1;
      }
      // Diferencia de gol
      td.parentElement.children[9].textContent = parseInt(td.parentElement.children[7].textContent) - parseInt(td.parentElement.children[8].textContent);
    }
  }
}
