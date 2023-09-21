const DetailsModel = require("../model/detailsModel");
const getDetails = async (req, res) => {
  try {
    // Retrieve data from the database
    const details = await DetailsModel.find();

    // Check if data was retrieved
    if (!details) {
      return res.status(404).json({ message: "Data not found" });
    }
    // Send the retrieved data as the response
    res.status(200).send({
      DetailsCount: details.length,
      message: "Data get Successfully",
      data: details,
    });
  } catch (error) {
    console.error("Error retrieving data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { getDetails };
