const express = require("express");

const { getCampaigns, createCampaign } = require("../controllers/campaigns");

const router = express.Router();

router.route("/:country").get(getCampaigns);

router.route("/").post(createCampaign);

module.exports = router;
