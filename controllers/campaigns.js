const Campaign = require("../models/Campaign");

// @desc    Get best campaign according to country
// @route   GET /api/v1/campaigns/:country
// @access  Private

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ country: req.params.country });

    const highestBid = campaigns.reduce(
      (max, campaign) => (max && max.bid > campaign.bid ? max : campaign),
      null
    );

    res.status(200).json({
      success: true,
      data: highestBid,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update campaign
// PUT /api/v1/campaigns/:id
// @access Private

exports.updateCampaign = async (req, res) => {
  const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!campaign) {
    return res.status(400).json({ success: false });
  }

  return res.status(200).json({ success: true, data: campaign });
};

// @desc    Delete campaign
// PUT /api/v1/campaigns/:id
// @access Private

exports.deleteCampaign = async (req, res) => {
  const campaign = await Campaign.findByIdAndDelete(req.params.id);

  if (!campaign) {
    return res.status(400).json({ success: false });
  }

  return res.status(200).json({
    success: true,
    data: `Campaign with id ${req.params.id} deleted.`,
  });
};

// @desc    Create new campaign
// @route   POST /api/v1/campaigns
// @access  Private

exports.createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create(req.body);

    res.status(201).json({
      success: true,
      data: campaign,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
