const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env'})

const app = express();

app.get('/api/v1/campaigns/:country', (req, res) => {
  res.status(200).json({success: true, data: `Show the best campaign for ${req.params.country}`})
})

app.post('/api/v1/campaigns', (req, res) => {
  res.status(201).json({success: true, data: 'create new campaign'})
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
)});
