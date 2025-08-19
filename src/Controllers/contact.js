import Contact from "../Models/contact.js";
import CustomError from "../middleware/CustomError.js";
import globalErrorHandler from "../middleware/globalErrorHandler.js";
import asyncErrorHander from "../middleware/asyncErrorHandler.js";

//@desc Get All Product
//@route GET api/v1/users/signup
//@access private

const getAllcontactMe = asyncErrorHander(async (req, res, next) => {
  const contact = await Contact.find({});
  res.status(200).json({
    success: true,
    Contact: contact,
  });
});

//@desc Create contactme
//@route POST /api/v1/profile/contactme
//@access Public

const CreateContactMe = asyncErrorHander(async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    console.log("All fields are mandatory");

    const contact = await Contact.create(req.body);
    res.status(200).json({
      success: "success",
      Contact: contact,
    });
  }
});

export { getAllcontactMe, CreateContactMe };
