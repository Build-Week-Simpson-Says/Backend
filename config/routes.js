const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate, jwtKey } = require('../auth/authenticate');
const Users = require('../data/user-model')

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
    res.status(500).json({ message: `Check register function routes.js`, error:`${error}`})
  })

}

function login(req, res) {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: 'Check username and password and try again'})
      }
    })
    .catch(error => {
    res.status(500).json({ message: 'Server error, check login function on routes.js', error: `${error}`})
  })
}
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const option = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, jwtKey, option);
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Quotes', error: err });
    });
}
