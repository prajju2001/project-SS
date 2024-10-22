const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a new user (student or teacher)
router.post('/add-user', (req, res) => {
    const { username, password, role } = req.body;
    let sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
    db.query(sql, [username, password, role], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User added successfully' });
    });
});

module.exports = router;
