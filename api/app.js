const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const {connectDb} = require('./config/db');
const { error } = require('./middlewares/error');
const { connectPassport } = require('./utils/provider');

// routes
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
dotenv.config({
    path: './config/.env'
});
connectDb();


// middlewares
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'access_token',
    cookie: {
        secure: false,
        httpOnly: false,
        sameSite: false
    }
}));
app.use(cookieParser());
app.use(express.json());


app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());
app.enable('trust proxy')

connectPassport();

// routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// error middleware
app.use(error);

// start app
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log('app is working on port: '+port);
})