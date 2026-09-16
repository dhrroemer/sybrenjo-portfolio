const fallbackProjects = [
  {
    id: 'vintage-lovers',
    title: 'Vintage Lovers Market',
    type: 'web',
    typeLabel: 'Webdesign',
    year: '2026',
    description:
      'Een digitaal platform voor vintage vondsten, met een rustige editorial stijl en ruimte voor onafhankelijke verkopers.',
    url: 'visueel%20design%20projecten/websites/vintage-lovers-market/index.html',
    image:
      'visueel%20design%20projecten/websites/vintage-lovers-market/images/hero/vintage-market-hero.jpg',
  },
  {
    id: 'pizza-house',
    title: 'Pizza House',
    type: 'web',
    typeLabel: 'Webdesign',
    year: '2026',
    description:
      'Een energieke restaurantsite die bezoekers zonder omwegen van menu naar bestelling brengt.',
    url: 'visueel%20design%20projecten/websites/pizza-website/index.html',
  },
  {
    id: 'klikoklaar',
    title: 'KlikoKlaar',
    type: 'web',
    typeLabel: 'Webdesign',
    year: '2025',
    description:
      'Een heldere visuele richting voor een merk dat dagelijkse eenvoud net iets leuker maakt.',
    url: 'visueel%20design%20projecten/websites/klikoklaar/index.html',
  },
  {
    id: 'gerechtbuilder',
    title: 'Gerechtbuilder',
    type: 'web',
    typeLabel: 'Webdesign',
    year: '2025',
    description:
      'Een interactieve tool die van losse ingrediënten een concreet gerecht maakt.',
    url: 'visueel%20design%20projecten/websites/gerechtbuilder/index.html',
  },
  {
    id: 'sportdrink-brandkit',
    title: 'Sportdrink Brandkit',
    type: 'brand',
    typeLabel: 'Branding',
    year: '2025',
    description:
      'Een complete visuele identiteit voor een sportdrank, van logo-systeem en iconen tot campagnes en productpresentatie.',
    url: 'visueel%20design%20projecten/brandingdesigns/sportdrink-brandkit/product%20mockup%20showcase.png',
    image:
      'visueel%20design%20projecten/brandingdesigns/sportdrink-brandkit/product%20mockup%20showcase.png',
  },
  {
    id: 'poster-design',
    title: 'Poster Design',
    type: 'poster',
    typeLabel: 'Posterdesign',
    year: '2025',
    description:
      'Een grafische postercompositie waarin typografie, kleur en beeld samen één duidelijke boodschap dragen.',
    url: 'visueel%20design%20projecten/posterdesigns/design001.png',
    image: 'visueel%20design%20projecten/posterdesigns/design001.png',
  },
  {
    id: 'designers-bag',
    title: 'Designers Bag',
    type: 'product',
    typeLabel: 'Productdesign',
    year: '2025',
    description:
      'Een productdesign voor een karaktervolle tas, uitgewerkt van eerste vormstudie tot verschillende presentaties.',
    url: 'visueel%20design%20projecten/productdesigns/designers%20bag/bagimage001.png',
    image:
      'visueel%20design%20projecten/productdesigns/designers%20bag/bagimage001.png',
  },
];

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const renderProjects = (projects) => {
  grid.innerHTML = projects
    .map(
      (project, index) => `
    <article class="project-card" data-type="${project.type}" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Bekijk ${project.title}">
      <div class="project-visual">${project.image ? `<img src="${project.image}" alt="" />` : ''}<span class="project-tag">0${index + 1} / ${project.typeLabel}</span><span class="project-arrow">↗</span><div class="project-visual-content"><h3>${project.title}</h3></div></div>
      <div class="project-meta"><span>${project.typeLabel}</span><span>${project.year}</span></div>
    </article>`,
    )
    .join('');
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () =>
      openProject(
        projects.find((project) => project.id === card.dataset.projectId),
      ),
    );
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') card.click();
    });
  });
};
const openProject = (project) => {
  dialogContent.innerHTML = `<p class="kicker">${project.typeLabel} / ${project.year}</p><h2>${project.title}</h2><p>${project.description}</p><a class="button button-dark" href="${project.url}" target="_blank" rel="noreferrer">Bekijk live project <span>↗</span></a>`;
  dialog.showModal();
};
renderProjects(fallbackProjects);
document.querySelectorAll('.filter').forEach((button) =>
  button.addEventListener('click', () => {
    document
      .querySelectorAll('.filter')
      .forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    renderProjects(
      filter === 'all'
        ? fallbackProjects
        : fallbackProjects.filter((project) => project.type === filter),
    );
  }),
);
document
  .querySelector('#dialog-close')
  .addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  const data = Object.fromEntries(new FormData(contactForm));
  status.textContent = 'Bericht wordt verstuurd...';
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('request failed');
    status.textContent = 'Dankjewel. Ik neem snel contact met je op.';
    contactForm.reset();
  } catch (error) {
    const subject = encodeURIComponent(`Portfolio bericht van ${data.name}`);
    const body = encodeURIComponent(
      `Naam: ${data.name}\nE-mail: ${data.email}\n\n${data.message}`,
    );
    window.location.href = `mailto:dhr.roemer@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Je e-mailprogramma wordt geopend.';
  }
});
fetch('/api/projects')
  .then((response) => (response.ok ? response.json() : Promise.reject()))
  .then((projects) => {
    if (Array.isArray(projects) && projects.length) renderProjects(projects);
  })
  .catch(() => {});
