const OpenIaServices = require("../Services/openIa.service");

class openIaControllers {
  async fetchCall(req, res) {
    try {
      const { query } = req.body;
      const callOpenIA = await OpenIaServices.hollo(query);
      return res.status(201).json({ data: "ta reponse", callOpenIA });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message || "Erreur lors de la gen response !",
      });
    }
  }
}

module.exports = new openIaControllers();
