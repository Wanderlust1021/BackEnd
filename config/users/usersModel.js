const db = require('../../database/dbConfig')

module.exports = {
    addUser,
    findUser,
    findUserById
}

async function addUser(user) {
    const [id] = await db('users')
        .insert(user)
    
    return  findUserById(id);
};

function findUser() {
    return db('users')
        .select('id', 'username')
        .first();
};

function findUserById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first();
};