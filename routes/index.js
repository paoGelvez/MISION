import { Router } from 'express'
import UserController from '../controllers/userController.js';
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});


// router.post('/', function(req, res, next) {
//   res.render('/createUser',UserController.create);
// });

router.post('/createUser',UserController.create)
router.get('/getUsers',UserController.getUsuarios)
router.get('/getUser/:id',UserController.getUsuario)
router.delete('/deleteUser/:id',UserController.deleteUser)


export default router