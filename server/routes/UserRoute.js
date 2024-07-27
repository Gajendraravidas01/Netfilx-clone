import mongoose from "mongoose";
import { Router } from "express";
import {addToLikeMovies, getLikedMovies, removeFromLikedMovies} from '../controllers/UserController.js'

const router = Router();

router.route("/add").post(addToLikeMovies);
router.route("/liked/:email").get(getLikedMovies)
router.route("/remove").put(removeFromLikedMovies);

export default router;

