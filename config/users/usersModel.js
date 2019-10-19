const db = require('../../database/dbConfig')

module.exports = {
    addUser,
    getUsers,
    findUserBy,
    findUserById
}

async function addUser(user) {
    const [id] = await db('users')
        .insert(user)
    
    return  findUserById(id);
};

function getUsers() {
    return db('users')
};

function findUserBy(filter) {
    return db('users')
        .where(filter);
};

function findUserById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first();
};