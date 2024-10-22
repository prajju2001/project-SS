const express = require('express');
const router = express.Router();
const db = require('../db');

// Get teacher details
router.get('/:id', (req, res) => {
    const teacherId = req.params.id;
    let sql = `SELECT * FROM teachers WHERE teacher_id = ?`;
    db.query(sql, [teacherId], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Add assignments/marks/lectures
router.post('/:id/add-material', (req, res) => {
    const teacherId = req.params.id;
    const { materialType, content } = req.body;
    let sql = `UPDATE teachers SET ${materialType} = ? WHERE teacher_id = ?`;
    db.query(sql, [content, teacherId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Material added successfully' });
    });
});

module.exports = router;
