const express = require("express");
const reviewRouter = express.Router();
const { Review } = require("../models");





reviewRouter.get("/:id", (req, res) => {
    console.log("Get Single Shop's Reviews Request Received on Back-End");
    // try {
    //     const shopData = await TacoShop.findById(req.params.id);
    //     res.send(shopData);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

reviewRouter.post("/", (req, res) => {
    console.log(req.body);
    // Review.create({
    //     shopName: req.body.formState.shopName,
    //     reviews: req.body.formState.reviews,
    //     menuURL: req.body.formState.url,
    //     rating: req.body.formState.rating,
    //     description: req.body.formState.description,
    //     featuredFood: req.body.formState.featuredFood,
    //     address: req.body.formState.address,
    //     location: req.body.formState.location,
    //     state: req.body.formState.state,
    //     city: req.body.formState.city,
    //     phone: req.body.formState.phone,
    //     zip: req.body.formState.zip,
    // });
    console.log("New Review Posted!");
});

// reviewRouter.post("/reviews/update", (req, res) => {
//     console.log("Update Reviews Route Hit");
//     TacoShop.updateOne(
//         { _id: req.body.shopId },
//         {
//             $push: {
//                 reviews: req.body.reviewInput,
//             },
//         },
//         (_err) => { }
//     );
// });

// reviewRouter.post("/update", (req, res) => {
//     TacoShop.updateOne(
//         { _id: req.body.id },
//         {
//             $push: {
//                 rating: req.body.index,
//             },
//         },
//         (_err) => { }
//     );
// });

module.exports = reviewRouter;
