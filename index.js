const form = document.querySelector("form");

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}
function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer`;
  }
}

getTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${myInput.value}</li>`;
  myInput.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  e.target.remove();
  storeList();
});
