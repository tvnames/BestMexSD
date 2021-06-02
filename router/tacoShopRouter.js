const express = require("express");
const tacoShopRouter = express.Router();
const mongojs = require("mongojs");
const { TacoShop } = require("../models");

const databaseUrl = "bestmexsd";
const collections = ["tacoshops"];

const db = mongojs(databaseUrl, collections);

// create route to return all tacoshops
tacoShopRouter.get("/", async (req, res) => {
  console.log("Get All Shops Request Received on Back-End");
  try {
    const tacoShopData = await TacoShop.find({});
    res.json(tacoShopData);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

tacoShopRouter.get("/:id", async (req, res) => {
  console.log("Get Single Shop Request Received on Back-End");
  try {
    const shopData = await TacoShop.findById(req.params.id);
    res.send(shopData);
  } catch (err) {
    res.status(500).json(err);
  }
});

tacoShopRouter.post("/", async (req, res) => {
  console.log("Post Shop Request Received on Back-End");
  // console.log(req.body.formState)
  TacoShop.create({
    shopName: req.body.formState.shopName,
    reviews: req.body.formState.reviews,
    menuURL: req.body.formState.url,
    rating: req.body.formState.rating,
    description: req.body.formState.description,
    featuredFood: req.body.formState.featuredFood,
    address: req.body.formState.address,
    location: req.body.formState.location,
    state: req.body.formState.state,
    city: req.body.formState.city,
    phone: req.body.formState.phone,
    zip: req.body.formState.zip,
  });
  console.log("New Shop Created!");
});

tacoShopRouter.post("/reviews/update", (req, res) => {
  console.log("Update Reviews Route Hit");
  console.log(req.body);
  TacoShop.updateOne(
    { _id: req.body.shopId },
    {
      $push: {
        reviews: req.body.reviewInput,
      },
    },
    (_err) => { }
  );
});

tacoShopRouter.post("/update", (req, res) => {
  TacoShop.updateOne(
    { _id: req.body.id },
    {
      $push: {
        rating: req.body.index,
      },
    },
    (_err) => { }
  );
});

module.exports = tacoShopRouter;
