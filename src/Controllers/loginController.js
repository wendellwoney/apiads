const userDal = require('../Dal/userDal');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response) {
        const {login, senha} = request.body;

        if(!login || !senha) {
            return response.status(500).send({ err: "error auth"});
        }

        const user = await userDal.loginUser(login, senha);

        if(!user) {
            return response.status(500).send({ err: "Login and password not exists in database"});
        }
        
        delete user.senha;
        let token = jwt.sign({ user }, process.env.SECRET, {
            expiresIn: 300
        });

        response.status(200).json({ auth: true, token: token});
    },

    async logOut(request, response) {
        response.status(200).json({ auth: false, token: null});
    },

    verifyJWT(request, response, next) {
        let token = request.headers.authorization;
        if(!token) {
            response.status(401).json({ auth: false, err: 'No token provided.'});
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                response.status(500).json({ auth: false, err: 'Failed to authorize token.'})
            }

            request.User = decoded.user;
            next();
        });
    }
}