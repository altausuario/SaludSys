import { Pool } from "pg";

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'admin',
    database: 'sys'
});

module.exports = pool;