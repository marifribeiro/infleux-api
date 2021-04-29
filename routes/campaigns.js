const express = require("express");

const {
  getCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaigns");

const router = express.Router();

router.route("/:country").get(getCampaigns);

router.route("/").post(createCampaign);

router.route("/:id").put(updateCampaign).delete(deleteCampaign);

module.exports = router;
