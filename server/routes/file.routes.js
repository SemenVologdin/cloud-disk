const Router = require('express');
const router = new Router();
const fileCotroller = require('../controllers/fileController');
const authMiddleware = require('../middleware/auth.middleware');

router.post('', authMiddleware, fileCotroller.createDir);
router.get('', authMiddleware, fileCotroller.getFiles);

module.exports = router;
