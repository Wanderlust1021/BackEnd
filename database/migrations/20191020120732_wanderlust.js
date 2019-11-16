exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
  
        users
          .string('username', 128)
          .notNullable()
          .unique();
        users
          .string('password', 128)
          .notNullable();  
    })
    .createTable('organizers', org => {
        org.increments();
  
        org
          .string('org_name', 128)
          .notNullable()
          .unique();
        org 
          .string('password', 128)
          .notNullable();
    })
    .createTable('experiences', exp => {
        exp.increments();
  
        exp 
          .integer('org_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('organizers')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        exp 
          
        exp
          .string('experience_title', 128)
          .notNullable();
        exp 
          .string('experience_desc', 256)
          .notNullable();
        exp 
          .string('experience_lat', 256)
          .notNullable();
          exp 
          .string('experience_long', 256)
          .notNullable();
        exp 
          .date('date')
        exp
          .binary('image')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('organizers')
      .dropTableIfExists('experiences');
  };
  