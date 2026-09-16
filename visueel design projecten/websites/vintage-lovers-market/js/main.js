const uitgelichteItemsContainer = document.getElementById('featured-items');

function maakUitgelichteAfbeelding(item) {
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

if (uitgelichteItemsContainer) {
  const uitgelichteItems = vintageItems.slice(0, 3);

  uitgelichteItemsContainer.innerHTML = '';

  uitgelichteItems.forEach(function (item) {
    const itemKaart = document.createElement('article');

    itemKaart.className = 'item-card';

    itemKaart.innerHTML = `
      ${maakUitgelichteAfbeelding(item)}
      <p class="item-category">${item.categoryLabel}</p>
      <h3>${item.title}</h3>
      <p class="item-price">€ ${item.price}</p>
      <a class="text-link" href="item.html?id=${item.id}">Bekijk item</a>
    `;

    uitgelichteItemsContainer.appendChild(itemKaart);
  });
}
