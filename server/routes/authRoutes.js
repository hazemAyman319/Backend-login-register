const express = require('express');
// initialize the web application
const router = express.Router();
// this makes sure that we can connect to different hosts even with different API endpoints
const cors = require('cors');
const { test, registerUser } = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin:'http://localhost:5173' // localhost of the front-end
    })
    
)
// A get request and test is the function with request and response
router.get('/',test)
router.post('/register', registerUser)
// export a file from inside express framework "router"
module.exports = router