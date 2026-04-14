/*
 DATABASE CONNECTION - PostgreSQL Pool Configuration
 =================================================
 Centralized database connection using pg Pool for efficient connection management.
 This handles multiple concurrent connections automatically.
 */
const { Pool } = require("pg");

const pool = new Pool({
  user: YOUR_USERNAME,           // Database username
  host: YOUR_HOSTNAME,          // Localhost for development
  database: YOUR_DATABASE_NAME,    // Database name
  password: YOUR_PASSWORD,       // Default password
  port: 5432,                 // Default PostgreSQL port
});

module.exports = pool;
