const Campaign = require("../models/Campaign");

// @desc    Get best campaign according to country
// @route   GET /api/v1/campaigns/:country
// @access  Private

exports.getCampaigns = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Show the best campaign for ${req.params.country}`,
  });
};

// @desc    Create new campaign
// @route   POST /api/v1/campaigns
// @access  Private

exports.createCampaign = async (req, res, next) => {
  const campaign = await Campaign.create(req.body);

  res.status(201).json({
    success: true,
    data: campaign,
  });
};
