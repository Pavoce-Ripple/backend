import express from "express";
import {
  createInvoice,
  deleteInvoice,
  getAllInvoices,
  getUserInvoices,
  updateInvoice,
} from "../controllers/invoice";
import { verifyToken } from "../utils/validation";

const router = express.Router();

router.post("/create", verifyToken, createInvoice);
router.patch("/update/:id", verifyToken, updateInvoice);
router.delete("/delete/:id", verifyToken, deleteInvoice);
router.get("/all", verifyToken, getAllInvoices);
router.get("/user-invoices", verifyToken, getUserInvoices);

export default router;
