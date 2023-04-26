import Express from 'express'

export async function user(req: Express.Request, res: Express.Response) {
  console.log('Testing...')

  return res.send({ message: "The controller is returning" })
}