const jwt = require("jsonwebtoken");

// Demo user
const demoUser = {
  id: 1,
  name: "Admin",
  email: "admin@gmail.com",
  password: "admin123",
  role: "Admin",
};

// Register user (demo, doesn't save to DB)
exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  return res.status(200).json({
    message: "User registered successfully",
    user: { name, email },
  });
};

// Login user
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email === demoUser.email && password === demoUser.password) {
    const token = jwt.sign(
      { id: demoUser.id, role: demoUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
