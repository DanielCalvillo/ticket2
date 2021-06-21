const db = require('../models/index');
const { Op } = require('sequelize');
const Comments = db.comments
const Users = db.users


const createComment = async (req, res) => {
  let newComment = req.body
  try {
    newComment = await Comments.create({
      title: newComment.title,
      description: newComment.description,
      receiver: newComment.receiver,
      sender: newComment.sender
    })
    res.status(200).json({ message: "Comment created succesfully", newComment})
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: "There was a problem creating comment", error: err })
  }
}

const findCommentsBySender = async (req ,res) => {
  const senderId = req.params.sender_id
  try {
    const comments = await Comments.findOne({
      where: {
        sender: {
          [Op.eq]: senderId
        }
      },
      attributes : ['id', 'title', 'description'],
      include: [
        { model: Users, as: 'senderUser'}
      ]
    })
    res.status(200).json({ message: "comments retrive succesfully", comments})
  } catch(err) {
    console.log(err)
    res.status(400).json( { message: "There was an error geting comments", error: err})
  }
}

module.exports = {
  createComment,
  findCommentsBySender
}