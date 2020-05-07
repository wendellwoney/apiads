const connection = require('../DataBase/Connection');

module.exports = {
    async getById(id) {
        const ad = await connection.table('ads')
        .where('id', id)
        .select('*').first();

        return ad;
    },

    async getAll()
    {
        const ads = await connection.table('ads').select('*');

        return ads;
    },

    async insert(request) {
        const { title, price } = request.body;

        const [id] = await connection.table('ads').insert(
            {
                title,
                price,
            }
        );

        return id;
    },

    async update(request, id) {
        const {title, price} = request.body;
        await connection.table('ads').update( { 
            title,
            price
        } ).where('id', id);
        return id;
    },

    async delete(id) {
        await connection.table('ads').where('id', id).delete();
    }
}