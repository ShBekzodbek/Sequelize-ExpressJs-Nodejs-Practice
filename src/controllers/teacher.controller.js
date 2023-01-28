const Student = require("../models/student");
const Teacher = require("../models/teacher");


const crypto = require('crypto');

require('dotenv').config();

exports.getAll = async (req, res, next) => {
    try {
        const teacher = await Teacher.findAll({
            include: [
                {
                    model: Student

                }
            ],
            attributes: ['firstName', "email", 'lastName']
        }).then((result) => {
            return res.status(200).send({
                message: "Teachers ",
                result
            })
        }).catch((err) => {
            console.log(err);
            return res.status(400).send({
                message: "Teachers not yet"
            });

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
        const result = await Teacher.destroy({ where: {} });
        console.log(result);
        return res.status(200).send({
            msg: "All Teachers have been deleted successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

exports.add = async (req, res, next) => {
    try {
        let uuid = crypto.randomUUID();
        const { firstName, lastName, email, phone } = req.body;
        const teacher = await Teacher.create({
            id: uuid, firstName, lastName, email, phone
        });
        const result = await teacher.save();
        return res.status(201).send({
            message: "teacher was added successfully",
            result
        })
    } catch (error) {
        console.log(error)
    }

};

exports.remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const removed = await Teacher.destroy({
            where: {
                id: id
            }
        });
        if (!removed) {
            return res.status(400).send({ msg: "Teacher not found!" });
        } else {
            return res.status(200).send({ msg: "Teacher is", removed })
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
        const removed = await Teacher.update(req.body, {
            where: {
                id: id
            }
        });
        if (removed) {
            return res.status(200).send({
                message: "Teacher updated"
            })
        } else {
            return res.status(400).send({
                message: "Teacher not found or Error"
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
        const teacher = await Teacher.findByPk(id, {
            include: [
                {
                    model: Student,
                    attributes: ['firstName', "email"]
                }
            ]
        });
        if (!teacher) {
            return res.status(400).send({ msg: "Teacher not found!" });
        } else {
            return res.status(200).send({ msg: "teacher is", student })
        }
    } catch (error) {
        console.log(error);
        return;

    }
}