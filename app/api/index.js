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
  // Obtenemos los productos
  const responseProducts = await axios.get(req.url);
  const dataProducts = responseProducts.data;
  // Obtenemos la cotización del dolár
  const responseDollar = await axios.get("dollar");
  const dataDollar = responseDollar.data;
  // Modificamos el array
  let products = [];
  dataProducts.products.forEach((product, index) => {
    // Creamos una copia del item actual
    let item = dataProducts.products[index];
    // Agregamos el precio original en pesos
    item.priceDollar = Number(
      parseFloat(product.price / dataDollar.rate).toFixed(2)
    );
    // Agregamos el precio original en doláres
    item.originalPriceDollar = Number(
      parseFloat(product.originalPrice / dataDollar.rate).toFixed(2)
    );
    // Reemplazamos la estension de la foto
    item.photo =
      product.photo.substr(0, product.photo.lastIndexOf(".")) + ".webp";
    // Actualizamos el item actual con la copia modificada
    dataProducts.products[index] = item;
  });
  // Retornamos la data
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
  res.send(response.data);
});

/**
 * GET /dollar
 */

app.get("/dollar", async (req, res) => {
  const response = await axios.get("dollar");
  res.send(response.data);
});

module.exports = app;
