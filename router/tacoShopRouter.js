const express = require("express");
const tacoShopRouter = express.Router();
const mongojs = require('mongojs')
const { TacoShop } = require("../models");
const Post = require("../models");

const databaseUrl = 'bestmexsd';
const collections = ['tacoshops'];

const db = mongojs(databaseUrl, collections);

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
    try {
        const shopData = await TacoShop.findById(req.params.id);
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

tacoShopRouter.post('/update', (req, res) => {
    console.log(req.body.index)
    TacoShop.updateOne(
        { _id: req.body.id },
        {
            $push: {
                rating: req.body.index
            }
        },
        (err, res) => {
        }
    )
    console.log("Hello")
}
);

module.exports = tacoShopRouter;