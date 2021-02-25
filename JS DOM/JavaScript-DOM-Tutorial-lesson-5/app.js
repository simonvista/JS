const books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach(function (book) {
  book.textContent += " (Book title)";
});

const bookList = document.querySelector("#book-list");
// console.log(bookList);
/*
bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add HTML content</p>"; */
bookList.innerHTML = `
<h2>Books and more books...</h2>
<p>This is how you add HTML content</p>`;
