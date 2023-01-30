import { Router } from "express";
import { save } from "./lib";
import products from "../data/productData.json";

let productData = products;

const router = new Router();

router.get("/", (req, res) => {
  res.json(productData);
});

router.post("/", (req, res) => {
  productData.push(req.body);
  save(productData);
  res.json({
    status: "success",
    term: req.body,
  });
});

router.delete("/:product_name", (req, res) => {
  productData = productData.filter((def) => def.product_name !== req.params.product_name);
  save(productData);
  res.json({
    status: "success",
    removed: req.params.product_name,
    newLength: productData.length,
  });
});

export default router;
