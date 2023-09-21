const router = require("express").Router();

const { getDetails } = require("../controllers/detailsController");

router.get("/", getDetails);

module.exports = router;
