import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticate = (req, res, next) => {
  let token = req.cookies.token;

  if (!token && req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1]; 
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;    
    next();
  } catch (error) {
    return res.status(401).json({ 
      message: 'Unauthorized: Invalid token',
      error: error.message
    });
  }
};