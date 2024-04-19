// backend-framework
const express = require('express');
// allows to use environment variables inside backend application and hide secret keys and strings
const dotenv = require('dotenv').config()
// connect the front-end localhost with the backend localhost or it will be a security issue
const cors = require('cors') 
// used to initialize express
const app =express();
app.use('/' , require('./routes/authRoutes'))
// port listening for the backend
const port= 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))