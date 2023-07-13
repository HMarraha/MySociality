import express from "express";
import {profile , friends, addRemoveFriend} from '../controllers/user.js'
import { verifyToken } from "../middleware/auth.js";
const router = express.Router()
// read
router.get('/:id', verifyToken, profile)
router.get('/:id/friends', verifyToken, friends)
// update
router.patch('/:id/:friendId', verifyToken, addRemoveFriend)
export default router