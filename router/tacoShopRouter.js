const express = require("express");
const tacoShopRouter = express.Router();
const { TacoShop } = require("../models");
const multer = require('multer');

// create route to return all tacoshops
tacoShopRouter.get("/", async (req, res) => {
  console.log("Get All Shops Request Received on Back-End");
  try {
    const tacoShopData = await TacoShop.find({})
    res.json(tacoShopData);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

tacoShopRouter.get("/:id", async (req, res) => {
  console.log("Get Single Shop Request Received on Back-End");
  try {
    const shopData = await TacoShop.findById(req.params.id)
    res.send(shopData);
  } catch (err) {
    res.status(500).json(err);
  }
});



tacoShopRouter.post("/reviews/update", (req, res) => {
  console.log("Update Reviews Route Hit");
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


tacoShopRouter.post("/", async (req, res) => {
  console.log(req.file);
  try {
    // await TacoShop.create({
    //   shopName: req.body.shopName,
    //   imagePath: req.file.path,
    //   reviews: req.body.reviews,
    //   menuURL: req.body.url,
    //   rating: req.body.rating,
    //   description: req.body.description,
    //   featuredFood: req.body.featuredFood,
    //   address: req.body.address,
    //   location: req.body.location,
    //   state: req.body.state,
    //   city: req.body.city,
    //   phone: req.body.phone,
    //   zip: req.body.zip,
    // });
    res.send(req.file)
    console.log("SUCCESS")
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});














module.exports = tacoShopRouter;
