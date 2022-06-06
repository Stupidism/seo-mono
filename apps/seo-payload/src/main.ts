/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import payload from 'payload';

const app = express();

payload.init({
  secret: 'SECRET_KEY',
  mongoURL: 'mongodb://localhost/payload',
  express: app,
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/admin`);
});
server.on('error', console.error);
