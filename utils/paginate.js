export const paginate = async (page, amount) => {
    const offset = (page - 1) * amount;
    const limit = amount;
    return { offset, limit };
};

export const getLastPage = async (count, itemsPerPage) => {
    return Number(Math.ceil(count / itemsPerPage));
};

