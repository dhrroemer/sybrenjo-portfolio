const verkoperFormulier = document.getElementById('seller-form');
const verkoperBericht = document.getElementById('seller-message');

if (verkoperFormulier && verkoperBericht) {
  verkoperFormulier.addEventListener('submit', async function (event) {
    event.preventDefault();

    const knop = verkoperFormulier.querySelector('button');
    const formulierData = new FormData(verkoperFormulier);

    formulierData.append('_subject', 'Nieuwe verkopersaanmelding');

    knop.disabled = true;
    knop.textContent = 'Aanmelding versturen...';
    verkoperBericht.textContent = '';

    try {
      const antwoord = await fetch('https://formspree.io/f/mgawrqqg', {
        method: 'POST',
        body: formulierData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!antwoord.ok) {
        throw new Error('De aanmelding kon niet worden verwerkt.');
      }

      verkoperBericht.textContent =
        'Bedankt. Je aanmelding is ontvangen. We nemen contact met je op.';

      verkoperFormulier.reset();
    } catch (fout) {
      verkoperBericht.textContent =
        'Er ging iets mis. Probeer het opnieuw of kom later terug.';
    } finally {
      knop.disabled = false;
      knop.textContent = 'Verstuur aanmelding';
    }
  });
}
