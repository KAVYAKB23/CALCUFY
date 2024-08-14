const express = require('express');
const userController=require('./Controller/userController')

const router = express.Router();
router.post('/register',userController.registerController)


module.exports = router;
