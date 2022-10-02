

const itemsOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', itemsOfCategories.length);

itemsOfCategories.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})


