import express from 'express';
import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
// Serve the React static files after build
app.use(express.static('./client/build'));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello' });
});

// All other unmatched requests will return the React app
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./client', 'build', 'index.html'));
});

export { app };
