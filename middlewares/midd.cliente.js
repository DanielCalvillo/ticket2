const jwt = require('jsonwebtoken')

module.exports.verificacionCliente = async (req, res, next)=>{
  let token = req.headers.authorization
  console.log(token)
  if (token != undefined){
      let tokenchk = token.split(' ')[1]
      let resultado = jwt.verify(tokenchk, process.env.SECRET_KEY)
      if(resultado){
          return next
      }else{
          throw new Error ('Token no valido')
      }
  }else{
      res.status(400).json('necesitas un JWT para ingresar')
  }
}