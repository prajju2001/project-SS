const express = require('express');
const router = express.Router();
const db = require('../db');

// Get student details
router.get('/:id', (req, res) => {
    const studentId = req.params.id;
    let sql = `SELECT * FROM students WHERE student_id = ?`;
    db.query(sql, [studentId], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Get timetable for a student
router.get('/:id/timetable', (req, res) => {
    const studentId = req.params.id;
    let sql = `SELECT timetable FROM students WHERE student_id = ?`;
    db.query(sql, [studentId], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
