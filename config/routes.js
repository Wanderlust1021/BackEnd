const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secrets = require('./secrets');
const { authenticate } = require('../middleware/authenticate');
const { validateAccount } = require('../middleware/validation');

const User = require('./users/usersModel');
const Org = require('./orgs/orgsModel');
const Exp = require('./exps/expsModel');

module.exports = server => {
    server.get('/', testing)
    server.post('/api/user/register', validateAccount, userRegister);
    server.post('/api/user/login', userLogin);
    server.get('/api/user', authenticate, getUsers);
    server.post('/api/org/register', validateAccount, orgRegister);
    server.post('/api/org/login', orgLogin);
    server.get('/api/org', authenticate, getOrgs);
    server.get('/api/exp', userGetExp)
    server.get('/api/exp/:id', authenticate, getExps);
    server.post('/api/org/:id/exp', authenticate, addExp);
    server.put('/api/exp/:id', authenticate, editExp);
    server.delete('/api/exp/:id', authenticate, deleteExp);
}

//TESTING AND GENERATE TOKEN
//WORKING
function testing(req, res) {
    res.send(`
    TESTING ENDPOINT
    `);
};

//WORKING
function generateToken(user) {
    const jwtPayload = {
        subject: user.id,
        username: user.username
    };
  
    const jwtOptions = {
        expiresIn: '1d',
    };
    return jwt.sign(jwtPayload, secrets.jwtSecret, jwtOptions);
};

//USER ENDPOINTS
//WORKING
function userRegister(req, res) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    User.addUser(user)
        .then(saved => {
            console.log(user.password)
            res.status(201).json(saved);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
};

//WORKING
function userLogin(req, res) {
    let { username, password } = req.body;

    User.findUserBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                    res.status(200).json({
                        user,
                        token
                    });
            }   else {
                res.status(401).json({
                    message: 'Invalid Credentials'
                })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Not Working!'})
        })
};

//WORKING
function getUsers(req, res) {
    User.getUsers()
        .then(userList => {
        res.status(201).json(userList);
        })
        .catch(err => {
            res.status(500).json(err);
        })
};

//ORG ENDPOINTS
//WORKING
function orgRegister(req, res) {
    let org = req.body;
    const hash = bcrypt.hashSync(org.password, 8);
    org.password = hash;

    Org.addOrg(org)
        .then(saved => {
            console.log(org.password)
            res.status(201).json(saved);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
};

//WORKING
function orgLogin(req, res) {
    let { org_name, password } = req.body;

    Org.findOrgBy({ org_name })
        .first()
        .then(org => {
            if (org && bcrypt.compareSync(password, org.password)) {
                const { id, org_name } = org
                const token = generateToken(org);
                    res.status(200).json({
                       id,
                       org_name,
                        
                        token
                    });
            }   else {
                res.status(401).json({
                    message: 'Invalid Credentials'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Not Working!'})
        })
};

//WORKING
function getOrgs(req, res) {

    Org.getOrgs()
        .then(orgList => {
            res.status(201).json(orgList);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
};

//EXP ENDPOINTS
//WORKING
function getExps(req, res) {
    const { id } = req.params;

    Org.getExps(id)
        .then(expList => {
            res.status(201).json(expList);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}

//WORKING
function userGetExp(req, res) {
    Exp.getExps()
        .then(expList => {
            res.status(201).json(expList)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}

//WORKING
function addExp(req, res) {
    const exp = req.body;
    const { id } = req.params;

    Org.addExp(exp, id)
        .then(exp => {
            res.status(201).json(exp)
        })
        .catch(err => {
            console.log('addExp', err)
            res.status(500).json(err)
        })
}

//WORKING
function editExp(req, res) {
    const expChanges = req.body;
    const { id } = req.params;

    Exp.editExp(expChanges, id)
        .then(update => {
            res.status(201).json({ message: 'Experience has been updated!' })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
}  

//WORKING
function deleteExp(req, res) {
    const { id } = req.params

    Exp.deleteExp(id)
        .then(newList => {
            res.status(201).json({ message: 'Experience has been deleted' })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}