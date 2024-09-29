const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

/* ****************************************************************** */

async function createUser(username, address) {
  try {
    const [user] = await pool.query("INSERT INTO user(name) VALUES(?)", [
      username,
    ]);
    const [addressInfo] = await pool.query(
      "INSERT INTO Address (userId,address) VALUES(?,?)",
      [user.insertId, address]
    );
    return { userId: user.insertId, addressId: addressInfo.insertId };
  } catch (error) {
    console.log(error.message);
  }
}
/* ****************************************************************** */

module.exports = createUser;
