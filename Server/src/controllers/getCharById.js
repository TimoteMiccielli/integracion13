const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        const { id, name, gender, species, origin: {name: origin}, image, status } = data;


        let character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        };

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(character));

    })

    .catch((error) => {
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.end(error.message);
    })
};