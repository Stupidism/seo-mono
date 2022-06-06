import express from 'express';
import payload from 'payload';
import { reset } from './cron/reset';
import { resetScheduledJob } from './cron/jobs';

const app = express();

// Redirect all traffic at root to admin UI
app.get('/', function (_, res) {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET_KEY,
  mongoURL: process.env.MONGO_URL,
  express: app,
  onInit: async () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);

    // Clear and reset database on server start
    // NOTE - this is only for demo purposes and should not be used
    // for production sites with real data
    await reset();
  },
});

// Seed database with startup data
resetScheduledJob.start();

app.listen(3000);
