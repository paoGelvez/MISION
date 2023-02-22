import { getAllUser } from "./getAllUsers.js";
const app = document.querySelector('#app')

let obj=[
        {id :1,
        name : "jose",
        email:"iejijepje",
        age: 18
    },
    {id :2,
            name : "paola",
            email:"iejijepje",
            age: 18},

        {id :13,
            name : "miguel",
            email:"iejijepje",
            age: 18
        },
        {id :13,
            name : "miguel",
            email:"iejijepje",
            age: 18
        }
    ];
    

   

// const a =document.getElementById('app')
app.appendChild(getAllUser(obj))