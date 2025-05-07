import jwt from 'jsonwebtoken';
import userModel from '../models/uses.model.js'

const isLoggedin = async(req, res, next) => {

  if (!req.cookies.token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const user = await userModel.findOne({email: decoded.email})

    if (!user) {
      return res.status(401).json({ message: 'User no longer exists' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default isLoggedin;