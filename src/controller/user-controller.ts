import express, { Request, Response } from 'express';
import { addNewUser, allUsers, findUser, deleteUser, updateUser } from '@src/service/user-service';

export const userRoute = express.Router();

userRoute.get('/test', (req: Request, res: Response) => {
  res.send({ message: 'user-controller' });
});

userRoute.get('/', (req: Request, res: Response) => {
  res.send(allUsers(req, res));
});

userRoute.get('/:userName', (req: Request, res: Response) => {
  res.send(findUser(req, res));
});

userRoute.post('/', (req: Request, res: Response) => {
  res.send(addNewUser(req, res));
});

userRoute.delete('/:userName', (req: Request, res: Response) => {
  res.send(deleteUser(req, res));
});

userRoute.patch('/:userID', (req: Request, res: Response) => {
  res.send(updateUser(req, res));
});