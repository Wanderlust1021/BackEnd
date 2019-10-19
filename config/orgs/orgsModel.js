const db = require('../../database/dbConfig')

module.exports = {
    addOrg,
    getOrgs,
    findOrgBy,
    findOrgById
}

async function addOrg(org) {
    const [id] = await db('organizers')
        .insert(org)
    
    return  findOrgById(id);
};

function getOrgs() {
    return db('organizers')
};

function findOrgBy(filter) {
    return db('organizers')
        .where(filter);
};

function findOrgById(id) {
    return db('organizers')
        .select('id', 'org_name')
        .where({ id })
        .first();
};