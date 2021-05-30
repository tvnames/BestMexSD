const express = require("express");
const tacoShopRouter = express.Router();
const { TacoShop } = require("../models");
const Post = require("../models");

// create route to return all tacoshops
tacoShopRouter.get("/", async (req, res) => {
    console.log("Get All Shops Request Received on Back-End")
    try {
        const tacoShopData = await TacoShop.find({
        })
        res.json(tacoShopData)

    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

tacoShopRouter.get("/:id", async (req, res) => {
    console.log("Get Single Shop Request Received on Back-End")
    // console.log(req.params)
    try {
        const shopData = await TacoShop.findById(req.params.id);
        // const shop = shopData.get({ plain: true })
        console.log(shopData)
        res.send(shopData)
    } catch (err) {
        res.status(500).json(err);
    }
});









tacoShopRouter.post("/", async (req, res) => {
    console.log("Post Shop Request Received on Back-End")
    console.log(req.body)
    try {
        const postData = await Post.findAll(req.params.id, {
            include: [{ model: TacoShop, attributes: ["name"] }, { model: TacoShop }],
        });
        const posts = postData.get({ plain: true });
        res.render("viewAllShops", {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = tacoShopRouter;