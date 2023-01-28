const express = require('express');

const teacher = require('../controllers/teacher.controller');


const router = express.Router();

router.get('/all', teacher.getAll);

router.post('/create', teacher.add);

router.get('/teacher/:id', teacher.getById);







module.exports = router;

