import cors from 'cors';
import { Express } from 'express';
import { limiter } from '../shared/middleware/rate-limiter';

const securitySetup = (app: Express, express: any) =>
  app
  .use(cors())
  .use(express.json())
  .use(limiter)

export default securitySetup;
