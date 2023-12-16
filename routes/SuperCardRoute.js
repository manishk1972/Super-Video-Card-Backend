import express from "express";
import { getSuperCard, saveSuperCard, updateSuperCard, deleteSuperCard } from "../controllers/SuperCardControllers.js";

const router = express.Router();

router.get('/:cardId', getSuperCard);
router.post('/save', saveSuperCard);
router.patch('/update/:cardId', updateSuperCard);
router.delete('/delete', deleteSuperCard);

export {router};