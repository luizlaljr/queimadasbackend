const axios = require('axios');
const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

const url = 'http://queimadas.dgi.inpe.br/queimadas/dados-abertos/download/?utm_campaign=dados-abertos&outputFormat=json&utm_medium=landing-page&time=48h&utm_content=focos_brasil_48h&id=focos_brasil&utm_source=landing-page'; 


server.get('/',async(_req,res) => {
    try {
        const {data} = await axios(url);
        res.json(data);
    } catch (error) {
       console.log(error);
    }
    
});

server.listen(process.env.PORT || 3333);

