const express = require('express')
const authControllers = require('../controller/auth') // import { createUser,updateUser,deleteUser } from "../controllers/adduser.controller.js";




const router = express.Router();

router.post('/adduser', authControllers.signup);
// router.put('/update', authControllers.updateUser);
// router.post('/auth', authControllers.auth);
// router.get('/logout', authControllers.logout);
// router.get('/check', authControllers.checkToken);
// router.put('/updateuser/:id', updateUser);
// router.delete('/deleteuser/:id', deleteUser);


module.exports = router
