const urlParameters = new URLSearchParams(window.location.search);
const itemId = Number(urlParameters.get('id'));

const huidigItem = vintageItems.find(function (item) {
  return item.id === itemId;
});

const itemAfbeelding = document.getElementById('item-image');
const interesseKnop = document.getElementById('interest-button');
const interesseBericht = document.getElementById('interest-message');

if (huidigItem) {
  document.title = huidigItem.title + ' | Vintage Lovers Market';

  document.getElementById('item-category').textContent =
    huidigItem.categoryLabel;
  document.getElementById('item-title').textContent = huidigItem.title;
  document.getElementById('item-price').textContent = '€ ' + huidigItem.price;
  document.getElementById('item-description').textContent =
    huidigItem.description;
  document.getElementById('item-period').textContent = huidigItem.period;
  document.getElementById('item-condition').textContent = huidigItem.condition;
  document.getElementById('item-seller').textContent = huidigItem.seller;

  if (huidigItem.image) {
    itemAfbeelding.textContent = '';
    itemAfbeelding.style.backgroundImage = `url("${huidigItem.image}")`;
    itemAfbeelding.style.backgroundPosition = 'center';
    itemAfbeelding.style.backgroundRepeat = 'no-repeat';
    itemAfbeelding.style.backgroundSize = 'cover';
  } else {
    itemAfbeelding.textContent = huidigItem.title;
  }
} else {
  document.getElementById('item-title').textContent = 'Item niet gevonden';
  document.getElementById('item-description').textContent =
    'Dit item bestaat niet meer of de link is onjuist.';

  interesseKnop.style.display = 'none';
}

if (interesseKnop && interesseBericht && huidigItem) {
  interesseKnop.addEventListener('click', function () {
    interesseBericht.textContent =
      'Bedankt voor je interesse in ' + huidigItem.title + '.';

    interesseKnop.disabled = true;
    interesseKnop.textContent = 'Interesse geregistreerd';
  });
}
