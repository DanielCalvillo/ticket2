const express = require('express');
const router = express.Router();

//Users
const users = require('../services/users.services');
//Comments
const comments = require('../services/comments.services')
//Invitations
const invitations = require('../services/invitations.services')

//Middlewares

const middleware = require('../middlewares/midd.cliente')

/**************************** USERS CRUD ****************************/

router.get('/users/:id', middleware.verificacionCliente, users.getUser);
router.post('/users/new', users.createUser);
router.patch('/users/update/:id', middleware.verificacionCliente, users.updateUser);
router.delete('/users/:id', middleware.verificacionCliente, users.deleteUser);
router.post('/users/login', users.loginUser);

/********************************************************************/
/**************************** Comments CRUD *************************/

router.get('/comments/:sender_id', middleware.verificacionCliente, comments.findCommentsBySender);
router.post('/comments/new', middleware.verificacionCliente, comments.createComment);

/********************************************************************/
/**************************** Invitations CRUD *************************/

router.get('/invitations', middleware.verificacionCliente, invitations.getInvitations);
router.post('/invitations/new', middleware.verificacionCliente, invitations.createInvitation);

/********************************************************************/



module.exports = router