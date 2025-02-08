const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const fs = require("fs");
const { fetchData } = require("./src/utils/utils.js");

const app = express();
const server = new http.Server(app);
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);
app.use(express.static("build", {}));

app.get("/", async (req, res) => {
  try {
    const data = await fetchData(
      "https://jmm-backend-cpfpfjb0g2e8febq.northeurope-01.azurewebsites.net/api/competitors"
    );
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.use((req, res) => {
  try {
    fs.accessSync(path.join(__dirname, "/build/index.html"), fs.constants.F_OK);
    res.sendFile(path.join(__dirname, "/build/index.html"));
  } catch (e) {
    res.sendFile(path.join(__dirname, "/500.html"));
  }
});

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("Server is running on port %s.", port);
  }
});
