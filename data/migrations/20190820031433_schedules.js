exports.up = function(knex) {
    return knex.schema.createTable('schedules', tbl => {
        //ID
        tbl.increments();

        //strings
        tbl.string('plans');
        tbl.string('dates');
        tbl.string('days').defaultTo('[0, 1, 2, 3, 4, 5, 6]');
        tbl.string('time').defaultTo('[off, off, off, off, off, off, off]');
    
        //ints
        tbl.integer('month');
        
        tbl.int('user_id')
           .notNullable()
           .references('id')
           .inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('schedules');
};