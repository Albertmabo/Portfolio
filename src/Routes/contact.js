import express from "express";
import {CreateContactMe, getAllcontactMe} from "../Controllers/contact.js";
const router = express.Router();


router.route("/").post(CreateContactMe).get(getAllcontactMe);

export default router;
 