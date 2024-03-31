const router = require("express").Router();
const { SECRET } = require("../config/config");
const jwt = require("../lib/jwt");
const userManager = require("../managers/userManager");
const { routeGuard } = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;
  try {
    await userManager.register({
      email,
      password,
      repeatPassword,
    });

    res.status(200).json("User registered");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userManager.login(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/user", async (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const user = await jwt.verify(JSON.parse(token), SECRET);
      res.status(200).json(user._id);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
});

router.post("/user/email", async (req, res) => {
  const {email} = req.body;
  try {
    const user = await userManager.checkForUser(email);
    if(!user) {
      res.status(200).json(false)
    } else {
      res.status(200).json(true)
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router;
