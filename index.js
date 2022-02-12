require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

const app = express();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASEURL,
    clientID: process.env.AUTH0_CLIENTID,
    issuerBaseURL: process.env.AUTH0_ISSUERBASEURL
};

app.use(morgan('dev'));
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen(3000, () => {
    console.log(`Server started ${process.env.WEB_URL}:${process.env.WEB_PORT}`)
});
