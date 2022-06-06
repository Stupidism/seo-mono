import express from 'express';
import payload from 'payload';

import { reset } from './cron/reset';
import { resetScheduledJob } from './cron/jobs';
import { environment } from './environments/environment';

const app = express();

// Redirect all traffic at root to admin UI
app.get('/', function (_, res) {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: environment.payload.secretKey,
  mongoURL: environment.payload.mongoUrl,
  express: app,
  onInit: async () => {
    payload.logger.info(
      `Payload Admin URL: ${environment.payload.publicServerUrl}`
    );

    // Clear and reset database on server start
    // NOTE - this is only for demo purposes and should not be used
    // for production sites with real data
    await reset();
  },
});

// Seed database with startup data
resetScheduledJob.start();

app.listen(environment.port);
