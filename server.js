const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'dados.json');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/dados', async (req, res) => {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    res.json(JSON.parse(raw));
  } catch (err) {
    res.status(500).json({ error: 'Não foi possível ler dados.json' });
  }
});

app.post('/api/dados', async (req, res) => {
  try {
    const content = JSON.stringify(req.body, null, 2);
    await fs.writeFile(DATA_FILE, content, 'utf8');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Não foi possível salvar dados.json' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
