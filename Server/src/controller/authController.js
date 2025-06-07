const Member = require('../model/Member')
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (member) => {
  return jwt.sign({ id: member._id, role: member.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role} = req.body;

    const existingMember = await Member.findOne({ email });
    if (existingMember) return res.status(400).json({ message: 'Email already exists' });

    const member = await Member.create({ name, email, password ,role});
    const token = generateToken(member);

    res.status(201).json({ token, member });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const member = await Member.findOne({ email });
    if (!member || !(await member.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(member);
    res.json({ token, member });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
