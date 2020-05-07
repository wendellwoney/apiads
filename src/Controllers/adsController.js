const adsDal = require('../Dal/adsDal');

module.exports = {

    async get(request, response) {
        console.log(request.User);
        response.json(await adsDal.getAll());
    },

    async getById(request, response) {
        const {id} = request.params;

        response.json(await adsDal.getById(id));
    },

    async insert(request, response) {
        
        let id = await adsDal.insert(request);
        return response.status(200).json({ id });
    },

    async update(request, response) {
        const {id} = request.params;
        const ad = await adsDal.getById(id);
        if(!ad) {
            return response.status(404).send({ err : 'Ads not found!'})
        }

        try{
            await adsDal.update(request, id);
            let upAd = await adsDal.getById(id);

            return response.status(200).json(upAd);
        } catch(err)
        {
            return response.status(500).send({ err : 'Not update ad, try again.'})
        }
    },

    async delete(request, response) {
        const {id} = request.params;
        const ad = await adsDal.getById(id);
        console.log(ad);
        if(!ad) {
            return response.status(404).send({ err: 'Ads not found!'});
        }

        try{
            await adsDal.delete(id);
            return response.status(204).send();
        } catch(err) {
            return response.status(500).send({ err: 'Not delete ad, try again.'});
        }
    }
};