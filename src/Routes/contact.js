const express = require("express");
const router = express.Router();
const {CreateContactMe, getAllcontactMe} = require("../Controllers/contact")

router.route("/").post(CreateContactMe).get(getAllcontactMe);

module.exports = router;
