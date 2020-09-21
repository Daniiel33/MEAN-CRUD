
const Student = require('../modules/students');

const student = new Student();


/**
 * 
 * @param {*} req Son todos los parametros recibidos.
 * @param {*} res Respuesta.
 */

/**
 * FUNCTION CREAR
 */

function create(req, res) {

    var student = new Student();
    var parametro = req.body;

    student.firstName = parametro.firstName;
    student.lastName = parametro.lastName;
    student.email = parametro.email;
    student.age = parametro.age;

    student.save((error, studentCreated) => {

        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })

        } else {

            if (!studentCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante almacenado Correctamente",
                    student: studentCreated
                })
            }
        }
    })
}

function obtener(req, res){


    Student.find((error, studentEncontrado) => {

        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })

        } else {

            if(!studentEncontrado){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error No fue posible encontrar el estudiante"
                })

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante encontrado",
                    students: studentEncontrado
                })
            }
        }
    })
}

function Update(req, res){
    var studentId = req.params.id;
    var studentUp = req.body;

    Student.findByIdAndUpdate({_id: studentId}, studentUp, (error, studentUpdate) =>{
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })

        } else {

            if(!studentUpdate){
                res.status(404).send({
                    statusCode: 404,
                    message: "Error No fue posible actualizar el estudiante"
                })

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante Actualizado",
                    student: studentUp
                })
            }
        }
    })
}

function Delete(req, res){
     studentrId = req.params.id;

    Student.findByIdAndDelete(studentrId, (error, StudentDelete) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })

        } else {

            if(!StudentDelete){
                res.status(404).send({
                    statusCode: 404,
                    message: "Error No fue posible Eliminar el estudiante"
                })

            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Estudiante Eliminado",
                    student: StudentDelete
                })
            }
        }
    })
}


module.exports = {
    create,
    obtener,
    Update,
    Delete
}

