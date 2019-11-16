const db = require('../../database/dbConfig')

module.exports = {
    addOrg,
    getOrgs,
    findOrgBy,
    findOrgById,
    addExp,
    getExps
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

function addExp(exp, org_id) {
    return db('experiences')
        .insert({...exp, org_id})
}

function getExps(id) {
    return db('organizers as o')
        .innerJoin('experiences as e', 'o.id', 'e.org_id')
        .where({ org_id: id })
        .select('o.org_name', 'e.id', 'e.experience_title', 'e.experience_desc', 'e.date', 'e.image', 'e.experience_lat','e.experience_long')
}