/**
 ************************************************
 * API PROXY
 ************************************************
 */

require("dotenv").config();

const express = require("express");
const mcache = require("memory-cache");
const $axios = require("axios");
const axios = $axios.create({
  baseURL: process.env.API_URL,
});

// Cache

const cache = (duration) => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

// App

const app = express();
/**
 * GET /
 */

app.get("", async (req, res) => {
  await axios
    .get(req.url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * GET /products
 */

app.get("/products", async (req, res) => {
  await axios
    .get(req.url)
    .then(async (responseProducts) => {
      const dataProducts = responseProducts.data;
      await axios
        .get("dollar")
        .then((responseDollar) => {
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
                product.photo.substr(0, product.photo.lastIndexOf(".")) +
                ".webp";
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
        })
        .catch((error) => {
          res.send(error);
        });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * GET /show/products
 */

app.get("/slow/products", cache(3600), async (req, res) => {
  await axios
    .get(req.url)
    .then(async (responseProducts) => {
      const dataProducts = responseProducts.data;

      await axios
        .get("dollar")
        .then((responseDollar) => {
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
                product.photo.substr(0, product.photo.lastIndexOf(".")) +
                ".webp";
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
        })
        .catch((error) => {
          res.send(error);
        });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * GET /categories
 */

app.get("/categories", async (req, res) => {
  await axios
    .get(req.url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * GET /categories_tree
 */

app.get("/categories_tree", async (req, res) => {
  await axios
    .get("categories")
    .then((response) => {
      // Ordenamos recursivamente la data en forma de arbol
      let orderTree = (list, parent_id) => {
        return list
          .filter((n) => n.parent_id == parent_id)
          .map((n) => {
            n.subcategories = orderTree(list, n.id);
            return n;
          });
      };
      res.send({ categories: orderTree(response.data.categories, null) });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * GET /dollar
 */

app.get("/dollar", async (req, res) => {
  await axios
    .get(req.url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = app;
