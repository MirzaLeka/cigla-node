import { Router, Request, Response } from 'express';

const controller = Router();

controller

  .post('/', async (req, res) => {
    console.log('POST / sending back body', req.body);
    res.status(201).send(req.body);
  })

  .get('/', async (req: Request, res: Response) => {
    console.log('GET / send back array of data');
    res.send([
      {
        name: 'sp',
        status: 200,
      },
    ]);
  })

  .get('/:id', async (req: Request, res: Response) => {
    console.log('GET id - sending back NULL with 404');
    res.status(404).send(null);
  })

  .post('/empty', async (req, res) => {
    console.log('POST / EMPTY - Sending back NULL');
    res.send(null);
  })

  .patch('/:id', async (req, res) => {
    console.log('PATCH - Sending back NULL with 204');
    res.status(204).send(null);
  })

  .delete('/:id', async (req, res) => {
    console.log('DELETED - Returning NULL');
    res.send(null);
  });

export default controller;
