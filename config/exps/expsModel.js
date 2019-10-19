const db = require('../../database/dbConfig')

module.exports = {
    addExp,
    getExps,
    editExp,
    deleteExp,
    findExpBy,
    findExpById
}

function addExp(exp) {
    return db('experiences')
        .insert(exp)
}

function getExps() {
    return db('experiences')
}

function editExp(changes, id) {
    return db('experiences')
        .where({ id })
        .update(changes)
}

function deleteExp(id) {
    return db('experiences')
        .where({ id })
        .del()
}

function findExpBy(filter) {
    return db('experiences')
        .where(filter)
}

function findExpById(id) {
    return db('experiences')
        .select('id', 'org_name')
        .where({ id })
        .first()
}
