import {pool} from "../DB/db.js"

class users {
    static table = 'usuarios'

    // #id;
    #nombre;
    #email;
    #age;

    constructor(body){

        this.#nombre = body.nombre;
        this.#age = body.age
        this.#email = body.email;
    }

    set nombre(nombre){ this.#nombre = nombre }
    set age(age){this.#age = age}
    set email(email){ this.#email = email }


    get nombre(){return this.#nombre}
    get age(){return this.#age}
    get email(){ return this.#email }
    




    create = async (req,res)=>{
        const [insert] = await pool.query('INSERT INTO usuarios(nombre,age,email) VALUES(?,?,?)',[this.#nombre,this.#age,this.#email])

        

        return 'usuario creado correctamente'

    }


    //obtener todos los usuarios

    static getUsuarios = async (req,res)=>{
        const [insert] = await pool.query('SELECT * FROM usuarios ')
        
            if (insert.length<=0)return res.status(404).json({
                message: 'no hay usuarios'
            })
            res.json(insert)
        
    }

    

    // Obtener un usuario específico por su ID

    static getUsuario = async (req,res)=>{
        const [insert] = await pool.query('SELECT * FROM usuarios WHERE id = ?',[req.params.id])
        
            if (insert.length<=0)return res.status(404).json({
                message: 'el usuario no existe'
            })
            res.send(insert[0])
        
    }




    // Actualizar un usuario existente



    



    //  Eliminar un usuario existente



    static deleteUser= async (req,res)=>{

        const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?',[req.params.id])
    
        
        if(result.affectedRows<=0)return res.status(404).json({
            message:'usuario no encontrado'
        })

       return  'usuario eliminado correctamente'
    
    }

}

export default users