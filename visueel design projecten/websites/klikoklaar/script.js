const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const postcode = formData.get('postcode');
  const phone = formData.get('phone');
  const containers = formData.get('containers');
  const message = formData.get('message');

  const whatsappNumber = '0649857331';

  const whatsappMessage = `Nieuwe aanvraag via KlikoKlaar

Naam: ${name}
Postcode: ${postcode}
Telefoonnummer: ${phone}
Aantal containers: ${containers}
Extra info: ${message || 'Geen extra informatie'}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');

  formMessage.textContent =
    'WhatsApp wordt geopend, verstuur daar je aanvraag.';
  form.reset();
});
