const connection = require('../DataBase/Connection');

module.exports = {
    async loginUser(login, senha) {

        const user = await connection.table('users')
        .where('login', login)
        .where('senha', senha)
        .select('*')
        .first();

        return user;
    }
};