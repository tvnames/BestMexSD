const express = require("express");
const tacoShopRouter = express.Router();
const { TacoShop } = require("../models");
const Post = require("../models");

// create route to return all tacoshops
tacoShopRouter.get("/", async (req, res) => {
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