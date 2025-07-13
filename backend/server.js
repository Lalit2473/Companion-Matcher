require('dotenv').config();
const app = require("./app");
const sequelize = require("./data/db");
const PORT = process.env.PORT || 5000;

async function startServer(){
  try{
    await sequelize.sync(); 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } 
  catch (err){
    console.error("Failed to start server:", err);
  }
}

startServer();