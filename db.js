import mysql from 'mysql2';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'trigger',
  database: 'blog',
  connectionLimit: 10, // Adjust according to your needs
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting MySQL connection:', err.message);
    // Handle the error
  } else {
    console.log('Connected to MySQL');
    connection.release(); // Release the connection back to the pool
  }
});
