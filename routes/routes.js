const express = require('express');
const router = express.Router();

//Users
const users = require('../services/users.services');
//Comments
const comments = require('../services/comments.services')
//Invitations
const invitations = require('../services/invitations.services')

/**************************** USERS CRUD ****************************/

router.get('/users/:id', users.getUser);
router.post('/users/new', users.createUser);
router.patch('/users/update/:id', users.updateUser);
router.delete('/users/:id', users.deleteUser);

/********************************************************************/
/**************************** Comments CRUD *************************/

router.get('/comments/:sender_id', comments.findCommentsBySender);
router.post('/comments/new', comments.createComment);

/********************************************************************/
/**************************** Invitations CRUD *************************/

router.get('/invitations', invitations.getInvitations);
router.post('/invitations/new', invitations.createInvitation);

/********************************************************************/



module.exports = router