const userRepository = require('../../src/repositories/user.repository');

exports.createUser = async (userData) => {
 if (!userData.email || !userData.password) {
     throw new Error('Email and password are required.');
 }

 return await userRepository.createUser(userData);
};

exports.getUserById = async (id) => {
    return await userRepository.getUserById(id);
}