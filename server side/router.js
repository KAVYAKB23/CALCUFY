const express = require('express');
const userController=require('./Controller/userController')

const router = express.Router();
router.post('/signup',userController.registerController)


module.exports = router;
