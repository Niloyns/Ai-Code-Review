const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("code is required");
  }

  try {
    const response = await aiService(code);
    res.send(response);
  } catch (error) {
    console.error("Error in AI service:", error);
    res.status(500).send("Internal Server Error");
  }
};
