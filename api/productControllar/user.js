const User = require("../schemas/user.schemas");
const bcrypt = require("bcrypt");

// register user
exports.registerUser = async (req, res, next) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if (existing) {
      res.status(401).json({ error: "User already existed" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const response = await newUser.save();

    res.status(200).send("User register successful");
  } catch (error) {
    next();
  }
};
