const multer = require('multer');
const { resolve } = require('node:path');
const { v4 } = require('uuid');

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'), //define o destino dos arquivos enviados para a pasta tmp/uploads
    filename: (_request, file, callback) => {
      const uniqueName = v4().concat(`-${file.originalname}`); //gera um nome unico para o arquivo
      return callback(null, uniqueName);
    },
  }), //configura o armazenamento dos arquivos usando o multer.diskStorage, que armazena os arquivos no disco
};
