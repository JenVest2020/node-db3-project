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
        .select('s.id', 'm.scheme_name', 's.step_number', 's.instructions')
        .orderBy('s.step_number');
}

function add(schemeData) {
    return db('schemes')
        .insert(schemeData, 'id');
}

// function addStep(stepData, id) {
//     return db('')
// }

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
}
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove

}