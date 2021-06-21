const db = require('../models/index');
const Users = db.users
const jwt = require('jsonwebtoken')


const generaToken = async (data)=>{
  try {
      let resultado = jwt.sign({
          data}, process.env.SECRET_KEY
      )
      return resultado
  }catch (err){
      console.log(err)
      throw new Error (err)
  }
}
const userExistOnDatabase = async (usr) => {
  let resultado = await Users.findOne({where: { name: usr.name, password: usr.password}, attributes : ['id', 'name', 'password'],})
  if (resultado === null){
      return false
  }else {
      return true
  }
}

const loginUser = async (req, res) => {
  let user = req.body
  try {
      let userExist = await userExistOnDatabase(user);
      if (userExist) {
          let tokenGenerated = await generaToken(user)
          res.status(200).json({ message: "token generado correctamente", token: tokenGenerated})
      } else {
          throw new Error (err)
      }
  } catch (err) {
      console.log(err)
      res.status(400).json({ message: "Error en el login", error: err})
  }
}



const createUser = async (req, res) => {
  let newUser = req.body
  try {
    newUser = await Users.create({
      profile_picture: newUser.profile_picture,
      name: newUser.name,
      password: newUser.password,
      city: newUser.city,
      country: newUser.country,
      degrees: newUser.degrees,
      languages: newUser.languages,
      linkedin_profile: newUser.linkedin_profile,
      hobbies: newUser.hobbies
    })
    res.status(200).json({ message: "User created succesfully", newUser})
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: "There was a problem creating user", error: err })
  }
}

const getUser = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await Users.findOne({ where: { id: userId} })
    res.status(200).json({ message: "User found succesfully", user})
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Couldn't find user" })
  }
}

const updateUser = async (req, res) => {
  const updateInfo = req.body
  const userId = req.params.id
  try {
    const user = await Users.findOne({ where: { id: userId }})
    // There has to be a validation here to ensure proper information
    const updatedUser = await user.update(updateInfo)
    res.status(200).json({ message: "user updated succesfully", updatedUser})
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: "There was a problem updaiting user", error: err })
  }

}

const deleteUser = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await Users.destroy({ where: { id: userId} })
    res.status(200).json({ message: "User deleted succesfully", user})
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Couldn't find user" })
  }
}

module.exports = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  loginUser
}