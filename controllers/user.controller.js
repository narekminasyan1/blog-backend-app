import { registerData, loginData } from '../services/user.service.js';

export const register = async (req, res, next) => {    
    try {
        const data = await registerData(req.body);
        res.json({ message: 'User registered' });
    } catch (error) {
        return res.json(error);
    }
};

export const login = async (req, res, next) => {
    
    try {
        const { user, token } = await loginData(req.body);
        
        if (!user) {
            return res.json({ message: 'Invalid credentials' });
        }

        res.cookie('token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
        });

        return res.json({ message: 'User logged in' });
            
    } catch (error) {
         return res.json(error);
    }
};

export const logout = async (req, res, next) => {
    
    try {
        res.clearCookie('token');
        return res.json({ message: 'Logged out' });
            
    } catch (error) {
         return res.json(error);
    }
};

