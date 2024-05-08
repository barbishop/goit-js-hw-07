const liItems = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${liItems.length}`);

liItems.forEach(element => {
  const titleElem = element.querySelector('h2');
  console.log(titleElem.textContent);

  const listItems = element.querySelectorAll('li');
  console.log(`Elements: ${listItems.length}`);
});
