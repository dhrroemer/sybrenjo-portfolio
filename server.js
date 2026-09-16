const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const root = __dirname;

app.use(express.json());
app.use(express.static(root, { extensions: ['html'] }));

app.get('/api/projects', (_request, response) => {
  const projects = JSON.parse(
    fs.readFileSync(path.join(root, 'projects.json'), 'utf8'),
  );
  response.json(projects);
});

app.post('/api/contact', (request, response) => {
  const { name, email, message } = request.body || {};
  if (!name || !email || !message)
    return response.status(400).json({ error: 'Vul alle velden in.' });
  console.log(
    `[contact] ${new Date().toISOString()} | ${name} <${email}> | ${message}`,
  );
  return response.status(201).json({ message: 'Bericht ontvangen.' });
});

app.get('*', (_request, response) =>
  response.sendFile(path.join(root, 'index.html')),
);
app.listen(port, () =>
  console.log(`Portfolio draait op http://localhost:${port}`),
);
