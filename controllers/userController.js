import users from '../models/users.js'


class UserController {

    static create=async(req,response)=>{
        // const dataUser = new User(req.body);
        // const res = await dataUser.createUser()
        // return response.json({'message': res})
        // console.log(res)
        
        try{

        const dataUser= new users(req.body);
            const res = await dataUser.create()


            return response.status(202).json({'message': res})
        }catch(error){
            return response.send({
                "status":404,
                "message":error.message
                
            })
        }
    }

    static getUsuarios = async(req,response)=>{
        try{
            const res = await users.getUsuarios(req,response)
            return response.status(202).json({'message': res})
        }catch(error){
            console.log(error)
            return response.send({
                "status":500,
                "message":error.message
                
            })
        }
    }



    static getUsuario = async(req,response)=>{
        try{
            const res = await users.getUsuario(req,response)
            return response.status(202).json({'message': res})
        }catch(error){
            console.log(error)
            return response.send({
                "status":500,
                "message":error.message
                
            })
        }
    }


    static deleteUser = async (req,response)=>{
        try{
            const res = await users.deleteUser(req,response)
            response.send(res)

        }catch(error){
            response.status(500).json({
                message:error.message
            })

        }
    }

   


}

export default UserController