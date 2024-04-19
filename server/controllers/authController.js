// this function is used for testing the backend endpoint
const test=(req, res)=>{
    res.json('test is working')
}
// exports the test function after sending the response
module.exports ={test}