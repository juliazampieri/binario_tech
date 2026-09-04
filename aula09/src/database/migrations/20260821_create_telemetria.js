exports.up = function(knex) {
	return kknex.schema.createTable('telemetria', function(table) {
		table.increments('id').primary();
		table.integer('veiculo_id').unsigned().notNullable();
		table.float('velocidade').notNullable();
		table float('temperatura_motor').notNullable();
		table.timestamp('capturado_em').defautTo(knex.fn.now());

		table.foreign('veiculo_id').references('id').inTable('veiculos').onDelete('CASCADE');

	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('telemetria');
};

