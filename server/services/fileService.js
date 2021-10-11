const fs = require('fs');
const File = require('../models/File');
const config = require('config');

class FileService {
  createDir(file) {
    const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'Файл был создан!' });
        } else {
          console.log(3);
          return reject({ message: 'Файл уже существует ' });
        }
      } catch (error) {
        reject({ message: 'Ошибка с файлом' });
      }
    });
  }
}

module.exports = new FileService();
