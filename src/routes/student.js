const db = require('../utils/connectDB');

const Student = require('../models/student');

const express = require('express');

const stu = require('../controllers/student.controller')

const router = express.Router();

router.get('/students', stu.getAll);

router.post('/add', stu.add);

router.delete('/remove/:id', stu.remove);

router.get('/student/:id', stu.getById);

router.delete("/delete", stu.deleteAll);

router.put('/update/:id', stu.update);

module.exports = router;
