const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend con nodeJS y PostgreSQL');
})

app.listen(port, () => {
    console.log('App runnomg on port', port);   
})