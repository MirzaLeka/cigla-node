import { Express, Request, Response } from 'express';
import spRouter from '../controllers/sp/sp.controller';


const routerSetup = (app: Express) =>
  app

  .get('/', async (req: Request, res: Response) => {
    res.send('Hello World!');
  })
  .use('/api/sp', spRouter)

export default routerSetup;
