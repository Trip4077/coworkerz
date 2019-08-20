exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        //ID
        tbl.increments();

        //Strings
        tbl.string('occupation');
        tbl.string('coworkers');
        tbl.string('password').notNullable();
        tbl.string('first_name', 255).notNullable();
        tbl.string('last_name', 255).notNullable();
        tbl.string('email').notNullable().unique();

        //Int
        tbl.integer('age').notNullable();

        //Boolean
        tbl.boolean('private').defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
