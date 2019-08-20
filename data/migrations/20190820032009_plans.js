exports.up = function(knex) {
    return knex.schema.createTable('plans', tbl => {
        //ID
        tbl.increments();

        //Foreign Keys
        tbl.integer('user_id')
           .references('id')
           .inTable('users');

        tbl.integer('schedules_id')
           .references('id')
           .inTable('schedules');

        //strings
        tbl.string('coworker').notNullable();
        tbl.string('details').notNullable();

        //int
        tbl.integer('day').notNullable();
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('plans');
};
