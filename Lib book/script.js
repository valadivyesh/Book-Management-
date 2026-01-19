function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;

  if (bookName === "" || authorName === "") {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("bookList");
  const row = table.insertRow();
  
  row.innerHTML = `
    <td>${bookName}</td>
    <td>${authorName}</td>
    <td><button class="delete-btn" onclick="deleteBook(this)">Delete</button></td>
  `;

  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
}

function deleteBook(btn) {
  const row = btn.parentElement.parentElement;
  row.remove();
}
let selectedRow = null;

function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;

  if (bookName === "" || authorName === "") {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("bookList");


  if (selectedRow === null) {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${bookName}</td>
      <td>${authorName}</td>
      <td>
        <button onclick="editBook(this)">Edit</button>
        <button class="delete-btn" onclick="deleteBook(this)">Delete</button>
      </td>
    `;
  } else {

    selectedRow.cells[0].innerText = bookName;
    selectedRow.cells[1].innerText = authorName;
    selectedRow = null;
  }

  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
}

function editBook(btn) {
  selectedRow = btn.parentElement.parentElement;

  document.getElementById("bookName").value =
    selectedRow.cells[0].innerText;
  document.getElementById("authorName").value =
    selectedRow.cells[1].innerText;
}

function deleteBook(btn) {
  const row = btn.parentElement.parentElement;
  row.remove();
}
