const express = require("express");
const app = express();

app.use(express.static(__dirname + "/disc"));
// app.get("/", (req, res) => {
//   res.send("Hello Guys");
// });
app.listen(process.env.PORT || 8080);
