const db = require('../models/index');
const { Op } = require('sequelize');
const Users = db.users
const Invitations = db.invitations

const createInvitation = async (req, res) => {
  let newInvitation = req.body
  try {
    newInvitation = await Invitations.create({
      receiver: newInvitation.receiver,
      sender: newInvitation.sender
    })
    res.status(200).json({ message: "Invitation created succesfully", newInvitation})
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: "There was a problem creating Invitation", error: err })
  }
}

const getInvitations = async (req, res) => {
  try {
    const invitations = await Invitations.findAll({
      include: [
        { model: Users, as: "theSender"}
      ]
    })
    res.status(200).json({ message: "Invitations retrieved succesfully", invitations})
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Error geting invitations", error: err})
  }
}

module.exports = {
  createInvitation,
  getInvitations
}