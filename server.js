const express = require("express");
const dotenv = require("dotenv");
const permissionRoutes = require("./routes/permissionRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/permissions", permissionRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
