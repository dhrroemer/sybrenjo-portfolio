const categorieFilter = document.getElementById('category-filter');
const collectieContainer = document.getElementById('collection-items');
const geenItemsBericht = document.getElementById('no-items-message');

function maakAfbeelding(item) {
  if (item.image) {
    return `
      <img
        class="item-image"
        src="${item.image}"
        alt="${item.title}"
      >
    `;
  }

  return `
    <div class="item-image item-image-placeholder">
      ${item.title}
    </div>
  `;
}

function toonItems(categorie) {
  const gefilterdeItems = vintageItems.filter(function (item) {
    return categorie === 'all' || item.category === categorie;
  });

  collectieContainer.innerHTML = '';

  gefilterdeItems.forEach(function (item) {
    const itemKaart = document.createElement('article');

    itemKaart.className = 'item-card';

    itemKaart.innerHTML = `
      ${maakAfbeelding(item)}
      <p class="item-category">${item.categoryLabel}</p>
      <h2>${item.title}</h2>
      <p class="item-price">€ ${item.price}</p>
      <a class="text-link" href="item.html?id=${item.id}">Bekijk item</a>
    `;

    collectieContainer.appendChild(itemKaart);
  });

  geenItemsBericht.textContent =
    gefilterdeItems.length === 0
      ? 'Er zijn nog geen items in deze categorie.'
      : '';
}

if (categorieFilter && collectieContainer && geenItemsBericht) {
  toonItems('all');

  categorieFilter.addEventListener('change', function () {
    toonItems(categorieFilter.value);
  });
}
