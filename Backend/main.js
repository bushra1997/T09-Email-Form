const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {
  const { name, age, mobile, email, paymentType } = req.body;

  const user = new usersModel({
    name,
    age,
    mobile,
    email,
    paymentType,
  });

  user.save().then((result) => {
    res.status(201).json(result);
  });
});

app.get("/info", (req, res) => {
    const userId = req.token.id;
    usersModel
      .find({ userId: userId })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  })
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
