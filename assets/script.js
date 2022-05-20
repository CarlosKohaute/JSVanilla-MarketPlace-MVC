const baseURL = 'http://localhost:3000/cells';

async function findAllCells() {
  const response = await fetch(`${baseURL}`);

  const cells = await response.json();

  cells.forEach(function (cell) {
    document.querySelector('#cellList').insertAdjacentHTML(
      'beforeend',
      `
    <div class="cellListItem">
            <div>
              <div class="cellListItem_name">${cell.name}</div>
              <div class="cellListItem_price">R$ ${cell.price}</div>
              <div class="cellListItem_description">${cell.description}</div>
            </div>
      <img class="cellListItem_photo" src="${cell.photo}" alt="Celular ${cell.name}" />
  </div>`
    );
  });
}
async function findByIdCells() {
  const id = document.querySelector('#cellId').value;
  const response = await fetch(`${baseURL}/find-cell/${id}`);
  const cell = await response.json();

  const chosedCellDiv = document.querySelector('.chosedCell');
  chosedCellDiv.innerHTML = `  <div class="cellCardItem">
  <div>
    <div class="cellCardItem_name">${cell.name}</div>
    <div class="cellCardItem_price">R$ ${cell.price}</div>
    <div class="cellCardItem_description">${cell.description}</div>
  </div>
<img class="cellCardItem_photo" src="${cell.photo}" alt="Celular ${cell.name}" />
</div>`;
}

findAllCells();
