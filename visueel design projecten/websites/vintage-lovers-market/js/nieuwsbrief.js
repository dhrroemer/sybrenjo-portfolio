const nieuwsbriefFormulier = document.getElementById('newsletter-form');
const nieuwsbriefBericht = document.getElementById('newsletter-message');

if (nieuwsbriefFormulier && nieuwsbriefBericht) {
  nieuwsbriefFormulier.addEventListener('submit', async function (event) {
    event.preventDefault();

    const knop = nieuwsbriefFormulier.querySelector('button');
    const formulierData = new FormData(nieuwsbriefFormulier);

    knop.disabled = true;
    knop.textContent = 'Bezig met inschrijven...';
    nieuwsbriefBericht.textContent = '';

    try {
      const antwoord = await fetch('https://formspree.io/f/xgawrqpg', {
        method: 'POST',
        body: formulierData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!antwoord.ok) {
        throw new Error('De inzending kon niet worden verwerkt.');
      }

      nieuwsbriefBericht.textContent =
        'Bedankt. Je bent ingeschreven voor de Vintage Lovers nieuwsbrief.';

      nieuwsbriefFormulier.reset();
    } catch (fout) {
      nieuwsbriefBericht.textContent =
        'Er ging iets mis. Probeer het opnieuw of kom later terug.';
    } finally {
      knop.disabled = false;
      knop.textContent = 'Inschrijven';
    }
  });
}
