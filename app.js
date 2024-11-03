const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const touerRouter = require('./routers/touersRouters');
const userRouters = require('./routers/usersRouters');

app.use('/api/v1/tours', touerRouter);
app.use('/api/v1/users', userRouters);

app.listen(8000, ()=> console.log('Lisen In port 8000'));