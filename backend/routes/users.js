import { Router } from "express";
import Users from "../model/Users.model.js";

const router = Router();

router.get("/", async (req, res) => {
    const users = await Users.find(req.query);
    res.send(users);
});

export default router;