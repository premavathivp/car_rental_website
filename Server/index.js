
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/routes/authRoutes');
const memberRoutes = require('./src/routes/memberRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const dealerRoutes = require('./src/routes/dealerRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');


const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/member',memberRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/dealer', dealerRoutes);
app.use('/api/reviews', reviewRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => 
  {
    console.log('Server running on port 5000')
  console.log("Database Connected Successfully")
}))

  .catch(err => console.error(err));
