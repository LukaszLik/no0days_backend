import jwt from 'jsonwebtoken';
import { User } from '@src/model/userModel';
import EnvVars from '@src/declarations/major/EnvVars';

export const createToken = (user: User[]) => {
  return jwt.sign({ user }, EnvVars.jwt.secret, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token: any) => {
  try {
    return jwt.verify(token.split(' ')[1], EnvVars.jwt.secret);
  } catch (e) {
    return 'error';
  }
};
