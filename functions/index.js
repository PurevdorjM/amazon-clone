const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51J3aooD3ySN7BxtFFPyNyxVKdwGQjWTsS84jDJ5EIvKnA8pDyQXq0W3VmMmVA43JbR0EUNJgnbYL1Qq1AHVLcWCM00fTTBGE08')

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, responce) => responce.status(200).send('hello world'))

app.post('/payment/create', async (request, responce) => {
    const total = request.query.total;

    console.log('Payment Requiest Recieved BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: 'usd',
    });

    responce.status(201).send({
        clientSectret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/challenge-e9aa3/us-central1/api