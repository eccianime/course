import knex, { Knex } from "knex";

const connection = knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
})