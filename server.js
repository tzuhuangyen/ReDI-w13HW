const express = require("express");
const app = express();
const PORT = 3000;

app.get("/homework", (req, res) => {
  res.send("This is Yen's w13's homework");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
