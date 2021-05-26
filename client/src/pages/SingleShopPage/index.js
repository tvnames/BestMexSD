const TacoShop = require("../../../../models/TacoShop");
const router = require("express").Router();
const { Post } = require("../models");

router.get("/TacoShop/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: TacoShop, attributes: ["name"] }, { model: TacoShop }],
    });

    const posts = postData.get({ plain: true });

    res.render("viewSingleShop", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
