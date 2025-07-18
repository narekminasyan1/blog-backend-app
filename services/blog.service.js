import db from '../models/index.cjs';
const { Blog } = db;
import {getLastPage, paginate} from "../utils/paginate.js";

export const getAllPostData = async (page = 1, itemsPerPage = 12) => {
    const { offset, limit } = await paginate(page, itemsPerPage);

    const {rows, count} = await Blog.findAndCountAll({
            offset,
            limit,
            order: [["createdAt", "desc"]],
        }
    );

    const data = {data: rows, lastPage: await getLastPage(count, itemsPerPage), currentPage: Number(page)};

    return data;
}

export const getData = async (userId, page = 1, itemsPerPage = 12) => {
    const { offset, limit } = await paginate(page, itemsPerPage);

    const {rows, count} = await Blog.findAndCountAll({
            where: {
                user_id: userId
            },
            offset,
            limit,
            order: [["createdAt", "desc"]],
        }
    );

    const data = {data: rows, lastPage: await getLastPage(count, itemsPerPage), currentPage: Number(page)};

    return data;
}

export const getSinglePostData = async (id) => {
    const blog = await Blog.findOne({where: {id: id}});
    return blog;
};


export const storeData = async (userId, body) => {
    const data = {
        user_id: userId,
        title: body.title,
        description: body.description,
    };

    const blog = await Blog.create(data);

    return blog;
}

export const updateData = async (id, body) => {
    const blog_check = await Blog.findOne({ where: { id: id } });

    const data = {
        title: body.title,
        description: body.description,
    };

    const blog = await Blog.update(data, {where: { id : id }});

    return blog;
};

export const destroyData = async (id) => {
    const blog = await Blog.findByPk(id);
    await blog.destroy();

    return blog;
}
