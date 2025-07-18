
import db from '../models/index.cjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const { User } = db;

export const registerData = async (body) => {
    console.log('register');
    const { email, password } = body;
    const hash = await bcrypt.hash(password, 10);
    await User.create({ email, password: hash })
    
    return true;
}

export const loginData = async (body) => {
    const { email, password } = body;

    const user = await User.findOne({ where: { email : email } });
    const userId = user.id;

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return { user: null };
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    return { user, token };
}