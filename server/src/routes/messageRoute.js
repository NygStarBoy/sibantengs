import express from "express";
import {
  deleteAllMessage,
  deleteMessage,
  getMessage,
  getMessageById,
  postMessage,
  searchMessage,
} from "../controllers/MessageController.js";
import { validateMessage } from "../validation/validateMessage.js";

const router = express.Router();

router.get("/message", getMessage);
router.post("/message", validateMessage(), postMessage);
router.get("/queryMessage", searchMessage);
router.get("/messageId", getMessageById);
router.delete("/messageOne", deleteMessage);
router.delete("/message", deleteAllMessage);

export default router;
