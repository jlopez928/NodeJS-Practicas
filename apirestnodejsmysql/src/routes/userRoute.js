// Forma 1
/*const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json([])
})

module.exports = router*/

//Forma 2

const User = require('../models/user')

module.exports = function(app) {

    app.get('/users', (req, res) => {
        //console.log(req)
        User.getUsers((err, data) => {
            res.status(200).json(data)
        })
    })

    app.post('/users', (req, res) => {
        //console.log(req.body)
        const userData = {
            id: null,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            created_at: null,
            update_at: null
        }

        User.insertUser(userData, (err, data) => {
            if (data && data.insertId) {
                //console.log(data)
                res.status(200).json({
                    success: true,
                    msg: 'Usuario Insertado',
                    data: data
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error'
                })
            }
        })
    })

    app.put('/users/:id', (req, res) => {
        const userData = {
            //id: req.body.id,
            id: req.params.id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            created_at: null,
            update_at: null
        }

        User.updateUser(userData, (err, data) => {
            if (data && data.msg) {
                res.json(data)
            } else {
                res.json({
                    success: false,
                    msg: 'Error'
                })
            }
        })
    })

    app.delete('/users/:id', (req, res) => {
        User.deleteUser(req.params.id, (err, data) => {
            if (data && data.msg == 'deleted' || data.msg == 'Not exists') {
                res.json({
                    success: true,
                    data
                })
            } else {
                res.status(500).json({
                    msg: 'Error'
                })
            }
        })
    })

}