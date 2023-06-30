require('dotenv').config();

const express = require('express');
const app = express;

app.use(express.json()); 

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const donationItems = new Map([
    ['1', {priceInCents: '100', name: 'Donation $1'}],
    ['2', {priceInCents: '500', name: 'Donation $5'}],
    ['3', {priceInCents: '1000', name: 'Donation $10'}],
    ['4', {priceInCents: '2000', name: 'Donation $20'}],
]);

app.listen(3000, () => console.log('Server running on port 3000'));
