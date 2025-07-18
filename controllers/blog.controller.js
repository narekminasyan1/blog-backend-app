import { getAllPostData, getData, destroyData, getSinglePostData, storeData, updateData } from '../services/blog.service.js';

export const allPost = async (req, res, next) => {
    try {        
        const data = await getAllPostData(req.query.page || 1, 12);
        res.json({ data: data });
    } catch (error) {
         return res.json(error);
    }
};

export const index = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        
        const data = await getData(userId, req.query.page || 1, 12);
        res.json({ data: data });
    } catch (error) {
         return res.json(error);
    }
};


export const getSinglePost = async (req, res, next) => {
    try {
        const data = await getSinglePostData(req.params.id);
        
        res.json({ data: data });
    } catch (error) {
         return res.json(error);
    }
};

export const create = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        await storeData(userId, req.body, req.file);
        res.json(true);
    } catch (error) {
         return res.json(error);
    }
}

export const edit = async (req, res, next) => {
    try {
        await updateData(req.params.id, req.body, req.file);
        res.json(true);
    } catch (error) {
         return res.json(error);
    }
}

export const destroy = async (req, res, next) => {
    try {
        await destroyData(req.params.id);
        res.json(true);
    } catch (error) {
         return res.json(error);
    }
};
