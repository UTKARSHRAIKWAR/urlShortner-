import { Router } from "express";
import { login, register } from "../controllers/user.controllers.js";
import { urlCreater, getUrl } from "../controllers/url.controllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/shorturl").post(protect, urlCreater);
router.route("/:urlCode").get(getUrl);

export default router;
