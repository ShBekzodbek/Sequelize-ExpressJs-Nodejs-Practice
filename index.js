const express = require('express');

require('dotenv').config();

const Student = require('./src/models/student');

const Teacher = require('./src/models/teacher');

const Subject = require('./src/models/subject');

const conn = require('./src/utils/connectDB')

const { DataTypes } = require('sequelize');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const studentRouter = require('./src/routes/student');

const teacherRouter = require('./src/routes/teacher');

Teacher.belongsToMany(Student, { through: Subject });

Student.belongsToMany(Teacher, { through: Subject })




conn.sync(
    { force: true })
    .then((result) => {

    }).catch((err) => {
        console.log(err);
    });



app.use('/stu', studentRouter);

app.use('/teacher', teacherRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




