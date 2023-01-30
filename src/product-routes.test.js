import express from "express";
import productRoutes from "./product-routes";
import { save } from "./lib";
import request from "supertest";

jest.mock("./lib", () => ({
  save: jest.fn(),
}));

jest.mock("../data/productData.json", () => [
  { id: 1, product_name: "aaa", image_url: "test a", price: 8 },
  { id: 2, product_name: "bbb", image_url: "test b", price: 8 },
  { id: 3, product_name: "ccc", image_url: "test c", price: 8 },
]);

const app = express();
app.use("/products", productRoutes);

describe("dictionary-routes", () => {
  it("GET /dictionary - success", async () => {
    const { body } = await request(app).get("/products");
    expect(body).toEqual([
      { id: 1, product_name: "aaa", image_url: "test a", price: 8 },
      { id: 2, product_name: "bbb", image_url: "test b", price: 8 },
      { id: 3, product_name: "ccc", image_url: "test c", price: 8 },
    ]);
  });

  it("DELETE /dictionary/bbb - success", async () => {
    const { body } = await request(app).delete("/products/bbb");
    expect(body).toEqual({
      status: "success",
      removed: "bbb",
      newLength: 2,
    });
    expect(save).toHaveBeenCalledWith([
      { id: 1, product_name: "aaa", image_url: "test a", price: 8 },
      { id: 3, product_name: "ccc", image_url: "test c", price: 8 },
    ]);
  });
});
