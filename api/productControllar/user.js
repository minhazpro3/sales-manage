const User = require("../schemas/user.schemas");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register user
exports.registerUser = async (req, res, next) => {
  const { email, password } = req.body.data;
  console.log(req.body.data);

  try {
    const existing = await User.findOne({ email: email });

    if (existing) {
      console.log("existed");
      res.status(401).send("User already existed");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email: email,
        password: hashedPassword,
      });

      if (newUser?.email && newUser?.password) {
        const response = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: response._id }, process.env.JWT_SECRET, {
          expiresIn: "2 days",
        });
        res
          .status(200)
          .send({ message: "User register successful", token: token });
      } else {
        res.status(500).send("Something went wrong");
      }
    }
  } catch (error) {
    next();
  }
};

// login user
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body.data;
  console.log(email, "back");
  try {
    const existing = await User.findOne({ email: email });
    if (!existing) {
      res.status(404).json({ message: "User could not found!" });
    }
    const isValidPass = await bcrypt.compare(password, existing.password);
    if (isValidPass) {
      const token = jwt.sign(
        {
          id: existing._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2 days" }
      );
      res.status(200).send({
        message: "login successful",
        token: token,
      });
    }
    res.status(500).send({
      message: "Login failed",
    });
  } catch (error) {
    next();
  }
};
