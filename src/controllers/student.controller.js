const Student = require("../models/student");

const crypto = require('crypto');
const Subject = require("../models/subject");
const Teacher = require("../models/teacher");

require('dotenv').config();

exports.getAll = async (req, res, next) => {
    try {
        page = parseInt(page);
        const student = Student.findAll({
            include: [{
                model: Subject,
                include: [
                    {
                        model: Teacher
                    }
                ]
            }
            ]
        })
            .then((result) => {
                return res.send(result);
            }).catch((err) => {
                console.log(err)
            });
    } catch (error) {
        console.log(error)
    }
};

exports.deleteAll = async (req, res, next) => {
    try {
        if (req.query.p != process.env.p) {
            return res.status(400).send({
                message: "Permission denied"
            })
        }
        const result = await Student.destroy({ where: {} });
        return res.status(200).send({
            msg: "All students have been deleted successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

exports.add = async (req, res, next) => {
    try {
        let uuid = crypto.randomUUID();
        const { firstName, lastName, email, phone, teacherId } = req.body;
        const student = await Student.create({
            id: uuid, firstName, lastName, email, phone
        });
        
        const result = await student.save();
        return res.status(201).send({
            message: "User was added successfully",
            result
        })
    } catch (error) {
        console.log(error)
    }

};

exports.remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const removed = await Student.destroy({
            where: {
                id: id
            }
        });
        if (!removed) {
            return res.status(400).send({ msg: "Student not found!" });
        } else {
            return res.status(200).send({ msg: "student is", removed })
        }
    } catch (error) {
        console.log(error);
        return;

    }
}

exports.update = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const removed = await Student.update(req.body, {
            where: {
                id: id
            }
        });
        if (removed) {
            return res.status(200).send({
                message: "Student updated"
            })
        } else {
            return res.status(400).send({
                message: "Student not found or Error"
            })
        }

    } catch (error) {
        console.log(error);
        return;

    }
}

exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await Student.findByPk(id);
        if (!student) {
            return res.status(400).send({ msg: "Student not found!" });
        } else {
            return res.status(200).send({ msg: "student is", student })
        }
    } catch (error) {
        console.log(error);
        return;

    }
}