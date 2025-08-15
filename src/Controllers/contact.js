
const Contact = require("../Models/contact")


//@desc Get All Product
//@route GET api/v1/users/signup
//@access private

const getAllcontactMe = (req,res)=>{
    const contact = Contact.find({});
    res.status(200).json({
        status: success,
        Contact: contact
    })

}



//@desc Create contactme 
//@route POST /api/v1/profile/contactme
//@access Public

const  CreateContactMe = (req,res) =>{
    const{
        name,
        email,
        subject,
        message
    } = req.body

    if(!name || !email || subject || message){
        console.log("All fields are mandatory")
    }

    const contact = Contact.create(req.body);
    res.status(200).json({
        success:"success",
        Contact:  contact
    })

    


}

module.exports= {
    getAllcontactMe,
    CreateContactMe
};