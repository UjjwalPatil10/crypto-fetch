require("dotenv").config();
const axios = require("axios");
const detailsModel = require("./model/detailsModel");
const connectDB = require("./model/db");
const fetchData = async () => {
  try {
    // Connect to the database
    await connectDB();
    // Fetch data from the API
    const apiUrl = "https://api.wazirx.com/api/v2/tickers";
    const response = await axios.get(apiUrl);
    const data = response?.data;
    // now we add top 10 results in database

    const saveResults = Object.values(data).slice(0, 10);
    console.log("TOP Results:", saveResults);
    console.log("Data:", data);
    // Save the data to the database
    for (const tickerData of saveResults) {
      await detailsModel.create(tickerData);
    }
    console.log("Data saved to MongoDB");
  } catch (error) {
    console.error("Error fetching and saving data:", error.message);
  }
};
fetchData();
