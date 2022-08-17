import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: process.env.PG_CONNECTION_DATABASE,
    host: process.env.PG_CONNECTION_HOST,
    username: process.env.PG_CONNECTION_USER,
    password: process.env.PG_CONNECTION_PASS,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false 
        }
    },
});
 
export default sequelize;