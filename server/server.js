require('dotenv').config();

const express = require('express');
const app = express;

app.request(express.json());    // to parse the body of the request

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.listen(3000, () => console.log('Server running on port 3000'));
