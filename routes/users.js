import { Router } from 'express'

const routerUser = Router()

/* GET home page. */
routerUser.get('/', function(req, res, next) {
  res.render('index', { title: 'pao' });
});

export default routerUser