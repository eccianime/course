"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const supportSSL = process.env.NODE_ENV === "dev"
    ? {}
    : {
        dialectOptions: {
            ssl: {
                require: false,
                rejectUnauthorized: false,
            },
        },
    };
const sequelize = new sequelize_1.Sequelize(Object.assign({ database: "neondb", host: "ep-proud-limit-971923.us-east-2.aws.neon.tech", username: "eccianime", password: "1VGo2vgcyjNK", port: 5432, dialect: "postgres" }, supportSSL));
exports.default = sequelize;
