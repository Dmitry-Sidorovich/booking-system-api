const router = require('express').Router();
const userController = require('../../src/controllers/user.controller');

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router;