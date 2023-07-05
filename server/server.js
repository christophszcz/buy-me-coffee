require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:4200'}));

app.use(express.json()); 

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const donationItems = new Map([
    ['1', {priceInCents: '100', name: 'Donation $1'}],
    ['2', {priceInCents: '500', name: 'Donation $5'}],
    ['3', {priceInCents: '1000', name: 'Donation $10'}],
    ['4', {priceInCents: '2000', name: 'Donation $20'}],
]);

app.listen(3000, () => console.log('Server running on port 3000'));

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`,
        });
        res.json({ url: session.url });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
        console.error(err);
    }
});
