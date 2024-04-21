// backend-framework
const express = require('express');
// allows to use environment variables inside backend application and hide secret keys and strings
const dotenv = require('dotenv').config()
// connect the front-end localhost with the backend localhost or it will be a security issue
const cors = require('cors') 
// used to initialize express
const {mongoose} = require('mongoose')
const app =express();

// database connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

//middleware
app.use(express.json())

app.use('/' , require('./routes/authRoutes'))
// port listening for the backend
const port= 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))