const userService = require('../../src/services/user.service');

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.'});
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};