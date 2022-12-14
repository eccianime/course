import { Sequelize } from "sequelize";

const supportSSL =
  process.env.NODE_ENV === "dev"
    ? {}
    : {
        dialectOptions: {
          ssl: {
            require: false,
            rejectUnauthorized: false,
          },
        },
      };

const sequelize = new Sequelize({
  database:
    process.env.NODE_ENV === "dev"
      ? process.env.PG_CONNECTION_DATABASE_DEV
      : process.env.PG_CONNECTION_DATABASE,
  host:
    process.env.NODE_ENV === "dev"
      ? process.env.PG_CONNECTION_HOST_DEV
      : process.env.PG_CONNECTION_HOST,
  username:
    process.env.NODE_ENV === "dev"
      ? process.env.PG_CONNECTION_USER_DEV
      : process.env.PG_CONNECTION_USER,
  password:
    process.env.NODE_ENV === "dev"
      ? process.env.PG_CONNECTION_PASS_DEV
      : process.env.PG_CONNECTION_PASS,
  port: 5432,
  dialect: "postgres",
  ...supportSSL,
});

export default sequelize;
