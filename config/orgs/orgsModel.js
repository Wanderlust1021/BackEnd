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
    return db('organizers')
        .innerJoin('experiences', 'organizers.id', 'experiences.org_id')
        .where({ org_id: id })
        .select('organizers.org_name', 'experiences.experience_title', 'experiences.experience_desc', 'experiences.date', 'experiences.image')
}