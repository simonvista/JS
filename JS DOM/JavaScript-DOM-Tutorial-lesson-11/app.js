const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const forms = document.forms;
console.log(forms);
console.log(forms["add-book"]);

Array.from(forms).forEach(function (form) {
  console.log(form);
});
//add a book
const addForm = forms["add-book"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  // const value = addForm.querySelector("#add-book input").value;
  console.log(value);
});
