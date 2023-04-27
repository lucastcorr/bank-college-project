import { Router } from 'express';

export const userRoutes = Router();

userRoutes.get('/', (req, res) => {
  console.log('Testing')

  return res.status(200).send({ message: 'Testing' })
})