const titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
//Convert titles to array in order to use foreach
Array.from(titles).forEach(function (title) {
  console.log(title);
});
