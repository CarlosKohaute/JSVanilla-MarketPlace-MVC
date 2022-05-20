const baseURL = 'http://localhost:3000';

async function findAllCells() {
  const response = await fetch(`${baseURL}/cells`);

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
async function findByIdCells(){

}

findAllCells();
