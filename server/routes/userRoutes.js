import { Router } from "express";
import { login, getUser, register } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, getUser);

export default router;
