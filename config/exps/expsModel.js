const db = require('../../database/dbConfig')

module.exports = {
    getExps,
    editExp,
    deleteExp,
    findExpBy,
    findExpById
}

function getExps() {
    return db('organizers as o')
    .innerJoin('experiences as e', 'o.id', 'e.org_id')
    .select('o.org_name', 'e.id', 'e.experience_title', 'e.experience_desc', 'e.date', 'e.image')
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
