const Router = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');
const { check } = require('express-validator');

const fileService = require('../services/fileService');
const File = require('../models/File');

const router = new Router();

router.post(
  '/registration',
  [
    check('email', 'Емэил неверен').isEmail(),
    check('password', 'Пароль неверен').isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Неверный запрос', errors });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: `Пользователь с емэйлом ${email} существует` });
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = new User({ email, password: hashPassword });
      await user.save();
      await fileService.createDir(new File({ user: user.id, name: '' }));
      return res.json({ message: 'Юзер сохранен' });
    } catch (error) {
      console.log(error);
      res.send({ message: 'Server error from auth' });
    }
  },
);

router.post(
  '/login',

  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      const isPassValid = bcrypt.compareSync(password, user.password);

      if (!isPassValid) {
        return res.status(400).json({ message: 'Пароль не верен' });
      }
      const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '1h' });
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpase: user.diskSpase,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({ message: 'Server error' });
    }
  },
);

module.exports = router;
