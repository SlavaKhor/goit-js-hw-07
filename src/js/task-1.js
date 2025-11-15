const ellements = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${ellements.length}`);

ellements.forEach((element) => {
  const h2 = element.querySelector("h2");
  const ul = element.querySelector("ul");
  const li = ul.querySelectorAll("li");

  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${li.length}`);
});
