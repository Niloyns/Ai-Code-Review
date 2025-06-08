const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send("prompt is required");
  }

  try {
    const response = await aiService(prompt);
    res.send(response);
  } catch (error) {
    console.error("Error in AI service:", error);
    res.status(500).send("Internal Server Error");
  }
};
