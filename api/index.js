require("dotenv").config();

const $axios = require("axios");
const axios = $axios.create({
  baseURL: process.env.API_URL,
});

const express = require("express");
const app = express();

/**
 * GET /
 */

app.get("", async (req, res) => {
  const response = await axios.get("");
  res.send(response.data);
});

/**
 * GET /products
 */

app.get("/products", async (req, res) => {
  const responseProducts = await axios.get(req.url);
  const dataProducts = responseProducts.data;
  const responseDollar = await axios.get("dollar");
  const dataDollar = responseDollar.data;
  dataProducts.products = dataProducts.products
    .filter((product) => {
      // Filtramos los productos del último mes
      const dateLimit = new Date();
      dateLimit.setMonth(dateLimit.getMonth() - 1);
      return new Date(product.updatedAt) > dateLimit;
    })
    .map((product) => {
      // Cambiamos la extensión de la foto
      product.photo =
        product.photo.substr(0, product.photo.lastIndexOf(".")) + ".webp";
      // Calculamos el precio en dolares
      product.priceDollar = Number(
        parseFloat(product.price / dataDollar.rate).toFixed(2)
      );
      // Calculamos el precio original en dolares
      product.originalPriceDollar = Number(
        parseFloat(product.originalPrice / dataDollar.rate).toFixed(2)
      );
      return product;
    });
  res.send(dataProducts);
});

/**
 * GET /categories
 */

app.get("/categories", async (req, res) => {
  const response = await axios.get("categories");
  res.send(response.data);
});

/**
 * GET /categories_tree
 */

app.get("/categories_tree", async (req, res) => {
  const response = await axios.get("categories");
  const data = response.data;
  // Ordenamos recursivamente la data en forma de arbol
  let orderTree = (list, parent_id) => {
    return list
      .filter((n) => n.parent_id == parent_id)
      .map((n) => {
        n.subcategories = orderTree(list, n.id);
        return n;
      });
  };
  res.send({ categories: orderTree(data.categories, null) });
});

/**
 * GET /dollar
 */

app.get("/dollar", async (req, res) => {
  const response = await axios.get("dollar");
  res.send(response.data.categories);
});

module.exports = app;
