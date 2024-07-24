const express = require("express");
const mysql = require("mysql2/promise"); 
const app = express();
const path = require('path');
const dotenv = require('dotenv');

// Assuming the parent directory is one level up from the current file

const port = process.env.PORT || 7000;

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'evanghadiforum'
});

(async () => {
    try {
        const connection = await database.getConnection();
        console.log("Connection to database established successfully");
        connection.release(); 
    } catch (err) {
        console.log("Database connection error: ", err.message);
    }
})();

app.listen(port, (err) => {
    if (err) {
        console.log("Server error: ", err.message);
    } else {
        console.log(`Server is running correctly on port ${port}`);
    }
});

module.exports = database;


