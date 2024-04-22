const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
// this function is used for testing the backend endpoint
const test=(req, res)=>{
    res.json('test is working')
}
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name was entered
        if(!name)
        {
            return res.json(
                {
                    error: 'name is required'
                }
            )
        };
        // Check the password
        if(!password || password.length < 6){
            return res.json({
                error: 'password is required and should be at least 6 characters long'
            })
        };
        //Check E-mail
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error:'Email is taken already'
            })
        }
        const hashedPassword = await hashPassword(password)
        //Create user in database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
// exports the test function after sending the response
module.exports ={
    test,
    registerUser
}