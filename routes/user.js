// import { Router } from "express";
import express from "express";
import { User } from "../models/user.js";
import { getAllUsers ,register,signUp} from "../controllers/users.js";


const router = express.Router();
router.get("/all",getAllUsers);
router.get("/userId/:id",register);
router.post("/new",signUp);


export default router;