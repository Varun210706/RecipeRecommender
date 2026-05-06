const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Routes
app.use('/api/UserSignUp', require('./src/routes/UserSignUpRoutes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected 🚀'))
.catch(err => console.error('MongoDB Connection Failed', err))

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
