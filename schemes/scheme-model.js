const db = require('../data/db-config');

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(id) {
    return db('steps as s')
        .join('schemes as m', 'm.id', 's.scheme_id')
        .orderBy('s.id');
}
module.exports = {
    find,
    findById,
    findSteps,



}