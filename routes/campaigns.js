const express = require("express");

const {
  getCampaigns,
  getBestCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaigns");

const router = express.Router();

router.route("/:country").get(getBestCampaign);

router.route("/").post(createCampaign).get(getCampaigns);

router.route("/:id").put(updateCampaign).delete(deleteCampaign);

module.exports = router;
