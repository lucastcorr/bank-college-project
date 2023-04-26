import { Router } from 'express';

export const bankRoutes = Router();

bankRoutes.get('/', (req, res) => {

  return 123
})