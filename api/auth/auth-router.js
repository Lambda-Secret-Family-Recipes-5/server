const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Auth = require('./restricted-middleware')

const db = require('../users/users-model.js')
const secrets = require('../../config/secrets.js')


router.post('register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    db.add(user)
        .then(user => {
            const token = Auth.generateToken(user)

            res.status(201).json({
                username: user.username,
                title: user.title,
                tagline: user.tagline,
                token
            })
       
        })
        .catch(error => {
            res.status(500).json({message: 'unable to create user.'})
        })
})

router.post('/login', (req, res) => {
    let { username, password} = req.body

    db.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = Auth.generateToken(user)

            res.status(200).json({
                username: user.username,
                title: user.title,
                tagline: user.tagline,
                token
            })
        } else {
            res.status(401).json({ message: 'invalid credentials'})
        }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '7d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router