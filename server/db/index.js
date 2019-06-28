import { config } from 'dotenv';
import { Pool } from 'pg';

config();

// Set Pool
const pool = new Pool(
  {
    user: 'testuser',
    host: 'localhost',
    database: 'mobile_farm',
    password: 'password',
    port: 5432,
  }
);

// Set Pool via env file
// const envConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT
// };

// const pool = new Pool (envConfig);

const db = {
  query: async (text, params, callback) => {
    const res = await pool.query(text, params, callback);
    return res.rows;
  }
};

export default db;
