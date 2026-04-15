const { resolve } = require('node:path');
const express = require('express');
const { default: e } = require('express');

const uploadPath = resolve(__dirname, '..', '..', 'uploads'); //define o caminho para os arquivos enviados usando o multer, apontando para a pasta tmp/uploads

const fileRouteConfig = express.static(uploadPath); //configura o express para servir os arquivos estáticos a partir do caminho definido em uploadPath


module.exports = fileRouteConfig; //exporta o middleware para ser usado em outros arquivos, permitindo que o express sirva os arquivos estáticos a partir do caminho definido em uploadPath