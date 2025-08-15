
const Contact = require("../../../../E-commerce/Models/laptop")
const contactMe = require("./")
//@desc Get All Product
//@route GET api/v1/users/signup
//@access private


const contactMe = (req,res) =>{
    const{
        name,
        email,
        subject,
        message
    } = req.body

    if(!name || !email || subject || message){
        console.log("All fields are mandatory")
    }

    const contact = Laptop.create(req.body);
    res.status(200).json({
        success:"success",
        Contact:  contact
    })

    


}

module.exports= {
    contactMe
};