import {Router} from "express";
import { productController } from "../controllers/products.controller.js";
const productsRouter = Router();

productsRouter.get("/getAll", productController.getAll);
productsRouter.get("/getOne/:barcode", productController.getOne);
productsRouter.post("/insertOne",productController.insertOne);
productsRouter.put("/updateOne/:barcode",productController.updateOne);
productsRouter.delete("/deleteOne/:barcode", productController.deleteOne);

export  { productsRouter }