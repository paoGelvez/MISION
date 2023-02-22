import {pool} from "../DB/db.js"

export class users {
    static table = 'users'

    #id_user;
    #name;
    #email;
    #age;
    #password;

    constructor(body){
        super();
        this.#email = body.email;
        this.#password = body.password;
    }

    set email(email){ this.#email = email }
    set password(password){ this.#password =  password }

    get email(){ return this.#email }
    get password(){ return this.#password }
    



    create = async ()=>{

    }
}