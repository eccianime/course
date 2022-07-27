// import knex, { Knex } from "knex";

// const connection = knex({
//     client: 'pg',
//     connection: process.env.PG_CONNECTION_STRING,
//     searchPath: ['knex', 'public'],
// })

import { Sequelize } from 'sequelize';

console.log(process.env.PG_CONNECTION_DATABASE);
const sequelize = new Sequelize({
    database: process.env.PG_CONNECTION_DATABASE,
    host: process.env.PG_CONNECTION_HOST,
    username: process.env.PG_CONNECTION_USER,
    password: process.env.PG_CONNECTION_PASS,
    port: 5432,
    dialect: 'postgres',
});
 
export default sequelize;